(function () {
  var CART_KEY = 'sowPedido';
  // /mesa (e /loja) é o cardápio do QR nas mesas: mesmo conteúdo, sem carrinho.
  var LOJA = /^\/(loja|mesa)\/?$/.test(location.pathname);

  var settings = {
    store_name: 'Sow',
    store_subtitle: 'Cake Lounge',
    whatsapp: '11971414381',
    instagram: 'sowcakelounge',
    menu_title: 'Cardápio',
    menu_footer: 'Pedidos feitos na mesa e que não forem consumidos terão custo de embalagem caso sejam levados para viagem.',
    order_greeting: 'Olá! Quero fazer um pedido na Sow:'
  };

  function el(tag, className, text) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function parsePrice(str) {
    var digits = String(str).replace(/[^\d,.]/g, '').replace(/\./g, '').replace(',', '.');
    return Math.round((parseFloat(digits) || 0) * 100);
  }

  // minúsculas e sem acento: "cafe" acha "Café"
  function norm(text) {
    return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function formatPrice(cents) {
    return 'R$ ' + (cents / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function whatsappNumber() {
    var d = String(settings.whatsapp || '').replace(/\D/g, '');
    return d.length <= 11 ? '55' + d : d;
  }

  function phone(d) {
    d = String(d).replace(/\D/g, '').replace(/^55(?=\d{10,11}$)/, '');
    return d.length === 11 ? '(' + d.slice(0, 2) + ') ' + d.slice(2, 7) + '-' + d.slice(7)
         : d.length === 10 ? '(' + d.slice(0, 2) + ') ' + d.slice(2, 6) + '-' + d.slice(6) : d;
  }

  function applySettings() {
    document.title = settings.store_name + ' | ' + settings.menu_title;
    var map = {
      store_name: settings.store_name,
      store_subtitle: settings.store_subtitle,
      menu_title: settings.menu_title,
      menu_footer: settings.menu_footer
    };
    Array.prototype.forEach.call(document.querySelectorAll('[data-s]'), function (node) {
      var key = node.getAttribute('data-s');
      if (map[key] !== undefined) node.textContent = map[key];
    });
    var insta = document.getElementById('footerInstagram');
    if (insta) {
      insta.hidden = !settings.instagram;
      insta.href = 'https://instagram.com/' + encodeURIComponent(settings.instagram || '');
      insta.textContent = '@' + settings.instagram;
    }
    var wa = document.getElementById('footerWhatsapp');
    if (wa) {
      wa.hidden = !settings.whatsapp;
      wa.href = 'https://wa.me/' + whatsappNumber();
      wa.textContent = 'WhatsApp ' + phone(settings.whatsapp);
    }
  }

  // ---------------------------------------------------------------------
  // Carrinho (só no /cardapio): guardado no localStorage do navegador.
  // ---------------------------------------------------------------------
  var cart = {};
  var catalog = {}; // id -> {name, unit, cents, sold_out} do cardápio carregado

  function loadCart() {
    try { cart = JSON.parse(localStorage.getItem(CART_KEY) || '{}') || {}; } catch (e) { cart = {}; }
    // Preço e nome sempre do cardápio atual; some o que saiu ou esgotou.
    Object.keys(cart).forEach(function (id) {
      var item = catalog[id];
      if (!item || item.sold_out || !(cart[id].qty > 0)) { delete cart[id]; return; }
      cart[id] = { name: item.name, unit: item.unit, price: item.cents, qty: cart[id].qty };
    });
    saveCart();
  }

  function saveCart() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  }

  function entries() {
    return Object.keys(cart).map(function (id) { return { id: id, entry: cart[id] }; });
  }

  function cartCount() { return entries().reduce(function (s, x) { return s + x.entry.qty; }, 0); }
  function cartTotal() { return entries().reduce(function (s, x) { return s + x.entry.qty * x.entry.price; }, 0); }
  function getQty(id) { return cart[id] ? cart[id].qty : 0; }

  function setQty(id, qty) {
    var item = catalog[id];
    if (qty <= 0 || !item) delete cart[id];
    else cart[id] = { name: item.name, unit: item.unit, price: item.cents, qty: qty };
    saveCart();
    syncCartUI();
  }

  function buildWhatsAppMessage() {
    var lines = entries().map(function (x) {
      var e = x.entry;
      return e.qty + 'x ' + e.name + (e.unit ? ' ' + e.unit : '') + ' — ' + formatPrice(e.qty * e.price);
    });
    return settings.order_greeting + '\n\n' + lines.join('\n') + '\n\nTotal: ' + formatPrice(cartTotal());
  }

  function stepper(id) {
    var wrap = el('span', 'qty-stepper');
    var minus = el('button', 'qty-minus', '−');
    minus.type = 'button';
    minus.setAttribute('aria-label', 'Diminuir quantidade');
    minus.addEventListener('click', function () { setQty(id, getQty(id) - 1); });
    var plus = el('button', 'qty-plus', '+');
    plus.type = 'button';
    plus.setAttribute('aria-label', 'Aumentar quantidade');
    plus.addEventListener('click', function () { setQty(id, getQty(id) + 1); });
    wrap.appendChild(minus);
    wrap.appendChild(el('span', 'qty-value', String(getQty(id) || 1)));
    wrap.appendChild(plus);
    return wrap;
  }

  function qtyControl(id) {
    var wrap = el('span', 'qty-control');
    wrap.dataset.qty = String(getQty(id));
    var add = el('button', 'qty-add', '+');
    add.type = 'button';
    add.setAttribute('aria-label', 'Adicionar ao pedido');
    add.addEventListener('click', function () { setQty(id, getQty(id) + 1); });
    wrap.appendChild(add);
    wrap.appendChild(stepper(id));
    return wrap;
  }

  // ---------------------------------------------------------------------
  // Cardápio
  // ---------------------------------------------------------------------
  // Fotos do cardápio impresso, mostradas depois da seção (pelo id dela).
  var SECTION_PHOTO = {
    cafes: [
      { src: 'assets/img/cappuccino-italiano.jpg', label: 'Cappuccino Italiano' },
      { src: 'assets/img/cappuccino-sow.jpg', label: 'Cappuccino Sow' }
    ],
    chas: [{ src: 'assets/img/chai-masala.jpg', label: 'Chai Masala' }],
    bolos: [
      { src: 'assets/img/red-velvet.jpg', label: 'Red Velvet' },
      { src: 'assets/img/chocolate-morango.jpg', label: 'Chocolate com Morango' }
    ],
    'bolos-inteiros': [{ src: 'assets/img/torta-integral-banana.jpg', label: 'Torta Integral de Banana' }],
    delicias: [{ src: 'assets/img/bowl-iogurte.jpg', label: 'Bowl de Iogurte' }],
    salgados: [{ src: 'assets/img/torta-frango.jpg', label: 'Torta de Frango' }]
  };

  var LEAF = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3l3.5 6.5L9.5 3"/></svg>';

  function vegMark() {
    var m = el('span', 'veg-mark');
    m.innerHTML = LEAF;
    m.title = 'Vegano';
    m.setAttribute('aria-label', 'Vegano');
    m.setAttribute('role', 'img');
    return m;
  }

  function renderItem(item, id, group, section) {
    var cents = item.price_cents != null ? item.price_cents : parsePrice(item.price);
    // Vários produtos têm a versão vegana com o mesmo nome: no pedido do
    // WhatsApp o "(vegano)" é o que diferencia um do outro.
    catalog[id] = { name: item.name + (item.vegan ? ' (vegano)' : ''), unit: item.unit || '', cents: cents, sold_out: !!item.sold_out };

    var li = el('li', 'item' + (item.sold_out ? ' is-sold-out' : ''));
    li.dataset.itemId = id;
    if (item.vegan) li.dataset.vegan = '1';
    var row = el('div', 'item-row');
    var name = el('span', 'item-name');
    if (item.vegan) name.appendChild(vegMark());
    name.appendChild(document.createTextNode(item.name));
    if (item.unit) {
      name.appendChild(document.createTextNode(' '));
      name.appendChild(el('span', 'unit', item.unit));
    }
    if (item.novo) name.appendChild(el('span', 'new-tag', 'Novidade'));
    row.appendChild(name);

    var right = el('span', 'item-right');
    right.appendChild(el('span', 'item-price', formatPrice(cents)));
    if (item.sold_out) right.appendChild(el('span', 'sold-out-tag', 'Esgotado'));
    else if (!LOJA) right.appendChild(qtyControl(id));
    row.appendChild(right);
    li.appendChild(row);
    if (item.note) li.appendChild(el('p', 'item-note', item.note));

    li.dataset.search = norm([item.name, item.unit, item.note, group.title, group.keywords, section.title,
      item.vegan ? 'vegano vegan' : '', item.novo ? 'novidade novo' : ''].filter(Boolean).join(' '));
    return li;
  }

  function renderMenu(sections) {
    var root = document.getElementById('menuRoot');
    var nav = document.getElementById('siteNav');
    root.classList.remove('loading');
    root.innerHTML = '';
    nav.innerHTML = '';
    catalog = {};

    sections.forEach(function (section, si) {
      var a = el('a', null, section.title);
      a.href = '#' + section.id;
      nav.appendChild(a);

      var sec = el('section', 'menu-section');
      sec.id = section.id;
      sec.appendChild(el('h2', 'section-title', section.title));
      (section.groups || []).forEach(function (group, gi) {
        sec.appendChild(el('h3', 'group-title', group.title));
        if (group.note) sec.appendChild(el('p', 'group-note', group.note));
        var list = el('ul', 'menu-list');
        (group.items || []).forEach(function (item, ii) {
          list.appendChild(renderItem(item, item.id || (si + '-' + gi + '-' + ii), group, section));
        });
        sec.appendChild(list);
      });
      root.appendChild(sec);

      var photos = SECTION_PHOTO[section.id];
      if (photos) {
        var wrap = el('div', 'section-photo' + (photos.length === 1 ? ' single' : ''));
        photos.forEach(function (photo) {
          var fig = el('figure');
          var img = el('img');
          img.src = photo.src;
          img.alt = photo.label;
          img.loading = 'lazy';
          fig.appendChild(img);
          fig.appendChild(el('figcaption', null, photo.label));
          wrap.appendChild(fig);
        });
        sec.appendChild(wrap);
      }
    });
  }

  function renderError() {
    var root = document.getElementById('menuRoot');
    root.classList.remove('loading');
    root.innerHTML = '';
    root.appendChild(el('p', 'loading-msg', 'Não foi possível carregar o cardápio agora. Recarregue a página.'));
  }

  // ---------------------------------------------------------------------
  // Barra e gaveta do pedido
  // ---------------------------------------------------------------------
  function syncCartUI() {
    if (LOJA) return;
    var count = cartCount();
    var total = cartTotal();

    Array.prototype.forEach.call(document.querySelectorAll('.qty-control'), function (control) {
      var li = control.closest('.item');
      var qty = li ? getQty(li.dataset.itemId) : 0;
      control.dataset.qty = String(qty);
      var v = control.querySelector('.qty-value');
      if (v) v.textContent = String(qty || 1);
    });

    document.getElementById('cartBar').classList.toggle('hidden', count === 0);
    document.getElementById('cartCount').textContent = String(count);
    document.getElementById('cartTotal').textContent = formatPrice(total);

    var list = document.getElementById('cartList');
    list.innerHTML = '';
    entries().forEach(function (x) {
      var li = el('li', 'cart-item');
      var info = el('div', 'cart-item-info');
      var name = el('span', 'cart-item-name', x.entry.name);
      if (x.entry.unit) {
        name.appendChild(document.createTextNode(' '));
        name.appendChild(el('span', 'unit', x.entry.unit));
      }
      info.appendChild(name);
      info.appendChild(el('span', 'cart-item-price', formatPrice(x.entry.qty * x.entry.price)));
      li.appendChild(info);
      var s = stepper(x.id);
      s.querySelector('.qty-value').textContent = String(x.entry.qty);
      li.appendChild(s);
      list.appendChild(li);
    });
    list.classList.toggle('hidden', count === 0);
    document.getElementById('cartEmpty').classList.toggle('hidden', count > 0);
    document.getElementById('cartDrawerTotal').textContent = formatPrice(total);
    document.getElementById('cartClearBtn').classList.toggle('hidden', count === 0);

    var send = document.getElementById('cartSendBtn');
    if (count === 0) {
      send.classList.add('is-disabled');
      send.removeAttribute('href');
    } else {
      send.classList.remove('is-disabled');
      send.href = 'https://wa.me/' + whatsappNumber() + '?text=' + encodeURIComponent(buildWhatsAppMessage());
    }
  }

  function initCart() {
    if (LOJA) return;
    loadCart();
    var overlay = document.getElementById('cartOverlay');
    var drawer = document.getElementById('cartDrawer');
    function open() { overlay.classList.remove('hidden'); drawer.classList.remove('hidden'); document.body.classList.add('cart-open'); }
    function close() { overlay.classList.add('hidden'); drawer.classList.add('hidden'); document.body.classList.remove('cart-open'); }
    document.getElementById('cartBarBtn').addEventListener('click', open);
    overlay.addEventListener('click', close);
    document.getElementById('cartClose').addEventListener('click', close);
    document.getElementById('cartClearBtn').addEventListener('click', function () { cart = {}; saveCart(); syncCartUI(); });
    syncCartUI();
  }

  // A capa se apaga sozinha pelo CSS. Aqui só tratamos o toque pra pular e a
  // regra de mostrar uma vez por visita.
  function welcome() {
    var cover = document.getElementById('welcome');
    if (!cover) return;
    var quieter = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var seen = false;
    try { seen = sessionStorage.getItem('sowBoasVindas') === '1'; } catch (e) {}
    if (quieter || seen) { cover.parentNode.removeChild(cover); return; }
    try { sessionStorage.setItem('sowBoasVindas', '1'); } catch (e) {}
    document.body.classList.add('welcoming');
    var close = function () {
      document.body.classList.remove('welcoming');
      cover.classList.add('gone');
      setTimeout(function () { if (cover.parentNode) cover.parentNode.removeChild(cover); }, 600);
    };
    cover.addEventListener('click', close);
    setTimeout(close, 2150);
  }

  // Sem o servidor (ex.: aberto pelo GitHub Pages), usa o cardápio estático.
  function loadFallback() {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'assets/js/menu-data.js';
      s.onload = function () { window.MENU_DATA ? resolve(window.MENU_DATA) : reject(); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function loadMenu() {
    return fetch('/api/menu', { cache: 'no-store' })
      .then(function (res) { if (!res.ok) throw new Error(); return res.json(); })
      .catch(loadFallback);
  }

  if (LOJA) document.documentElement.classList.add('modo-loja');
  welcome();

  document.addEventListener('DOMContentLoaded', function () {
    var siteNav = document.getElementById('siteNav');
    var backToTop = document.getElementById('backToTop');

    function onScroll() {
      var pos = window.scrollY + 110;
      var links = Array.prototype.slice.call(siteNav.querySelectorAll('a'));
      var current = null;
      links.forEach(function (link) {
        var target = document.getElementById(link.getAttribute('href').slice(1));
        if (target && target.offsetTop <= pos) current = link;
      });
      links.forEach(function (link) { link.classList.toggle('active', link === current); });
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    var searchInput = document.getElementById('menuSearch');
    var veganBtn = document.getElementById('veganFilter');
    var noResults = document.getElementById('noResults');
    function applyFilter() {
      var onlyVegan = veganBtn.getAttribute('aria-pressed') === 'true';
      var text = norm(searchInput.value.trim());
      var query = text || (onlyVegan ? '·' : '');
      var anyVisible = false;
      Array.prototype.forEach.call(document.querySelectorAll('.item'), function (item) {
        var match = (text === '' || (item.dataset.search || '').indexOf(text) !== -1) &&
          (!onlyVegan || item.dataset.vegan === '1');
        item.classList.toggle('hidden', !match);
        if (match) anyVisible = true;
      });
      Array.prototype.forEach.call(document.querySelectorAll('.group-title'), function (group) {
        var e = group.nextElementSibling;
        var hasVisible = false;
        while (e && !e.classList.contains('group-title')) {
          if (e.classList.contains('group-note')) e.classList.toggle('hidden', query !== '');
          if (e.classList.contains('menu-list')) hasVisible = e.querySelectorAll('.item:not(.hidden)').length > 0;
          e = e.nextElementSibling;
        }
        group.classList.toggle('hidden', query !== '' && !hasVisible);
      });
      Array.prototype.forEach.call(document.querySelectorAll('.menu-section'), function (section) {
        section.classList.toggle('hidden', query !== '' && !section.querySelector('.item:not(.hidden)'));
        var photo = section.querySelector('.section-photo');
        if (photo) photo.classList.toggle('hidden', query !== '');
      });
      noResults.classList.toggle('hidden', anyVisible);
    }
    searchInput.addEventListener('input', applyFilter);
    veganBtn.addEventListener('click', function () {
      veganBtn.setAttribute('aria-pressed', String(veganBtn.getAttribute('aria-pressed') !== 'true'));
      applyFilter();
    });

    loadMenu().then(function (data) {
      if (data.settings) for (var k in data.settings) settings[k] = data.settings[k];
      applySettings();
      renderMenu(data.sections || []);
      initCart();
      onScroll();
    }).catch(renderError);
  });
})();
