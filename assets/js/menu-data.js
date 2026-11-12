/* Cardápio Sow — extraído do cardápio oficial (PDF, abril/2026).
   É a carga inicial do banco (scripts/gerar-cardapio-sql.mjs) e o
   cardápio de reserva quando o site abre sem o servidor.
   vegan: true -> selo vegano; novo: true -> selo "Novidade". */
window.MENU_DATA = {
  sections: [
    {
      id: 'cafes',
      title: 'Cafés',
      groups: [
        {
          title: 'Quentes',
          keywords: 'cafe quente espresso expresso cappuccino latte',
          items: [
            { name: 'Cappuccino Sow', unit: '200 ml', price: 'R$ 27,50', vegan: true, note: 'Com leite vegetal e calda de chocolate vegano (cacau 100%).' },
            { name: 'Cappuccino Sow', unit: '200 ml', price: 'R$ 24,00', note: 'Espresso, leite, chocolate quente feito com nossa receita exclusiva e chantilly.' },
            { name: 'Cappuccino Sow de Doce de Leite', unit: '200 ml', price: 'R$ 24,00', note: 'Espresso, leite, doce de leite e chantilly.' },
            { name: 'Cappuccino Italiano', unit: '150 ml', price: 'R$ 20,00', vegan: true, note: 'Espresso, leite vegetal e crema de leite vegetal vaporizado.' },
            { name: 'Cappuccino Italiano', unit: '150 ml', price: 'R$ 16,50', note: 'Espresso, leite e crema de leite vaporizado.' },
            { name: 'Matcha com Leite Vegetal', unit: '200 ml', price: 'R$ 27,50', vegan: true },
            { name: 'Latte Macchiato', unit: '200 ml', price: 'R$ 22,00', vegan: true, note: 'Leite vegetal manchado com espresso.' },
            { name: 'Latte Macchiato', unit: '200 ml', price: 'R$ 19,00', note: 'Leite vaporizado manchado com espresso.' },
            { name: 'Espresso com Leite Médio', unit: '150 ml', price: 'R$ 20,00', vegan: true, note: 'Espresso com leite vegetal.' },
            { name: 'Espresso com Leite Médio', unit: '150 ml', price: 'R$ 18,00', note: 'Espresso tradicional com leite.' },
            { name: 'Espresso com Leite Pequeno', unit: '50 ml', price: 'R$ 16,50', vegan: true, note: 'Espresso com leite vegetal.' },
            { name: 'Espresso com Leite Pequeno', unit: '50 ml', price: 'R$ 13,50', note: 'Espresso tradicional com leite.' },
            { name: 'Doppio Macchiato', unit: '150 ml', price: 'R$ 19,00', note: 'Espresso com crema de leite vaporizado.' },
            { name: 'Café Coado na Mesa', unit: '120 ml', price: 'R$ 20,00', note: 'Café coado na Hario V60.' },
            { name: 'Doppio Romano', unit: '150 ml', price: 'R$ 17,00', note: 'Espresso gourmet aromatizado com zest de limão siciliano.' },
            { name: 'Espresso Doppio', unit: '150 ml', price: 'R$ 17,00', note: 'Duas doses de espresso 3/4 padrão.' },
            { name: 'Espresso Romano', unit: '40 ml', price: 'R$ 14,00', note: 'Espresso gourmet aromatizado com zest de limão siciliano.' },
            { name: 'Drip Coffee Descafeinado', unit: '40 ml', price: 'R$ 13,00' },
            { name: 'Espresso Macchiato', unit: '50 ml', price: 'R$ 13,00', note: 'Espresso com crema de leite vaporizado.' },
            { name: 'Espresso Especial Blend da Casa', unit: '40 ml', price: 'R$ 11,00', note: 'Grãos selecionados de alta qualidade, 100% arábica.' },
            { name: 'Ristretto', unit: '20 ml', price: 'R$ 11,00' },
            { name: 'Curto', unit: '30 ml', price: 'R$ 11,00' },
            { name: 'Longo', unit: '50 ml', price: 'R$ 11,00' },
            { name: 'Carioca', price: 'R$ 11,00', note: '20 ml de água + 30 ml de espresso.' }
          ]
        },
        {
          title: 'Gelados',
          keywords: 'cafe gelado iced frio',
          items: [
            { name: 'Sow Caramelo', unit: '350 ml', price: 'R$ 33,00', vegan: true, novo: true, note: 'Café espresso, xarope de caramelo, flor de sal e leite vegetal.' },
            { name: 'Shake de Brownie', unit: '350 ml', price: 'R$ 31,00', note: 'Sorvete, café espresso, brownie e ganache.' },
            { name: 'Matcha com Leite Vegetal, Gelo e Espresso', unit: '350 ml', price: 'R$ 29,00', vegan: true },
            { name: 'Café com Tônica', unit: '350 ml', price: 'R$ 30,00', novo: true, note: 'Espresso, água tônica, xarope de limão e raspa de gengibre ou canela. (By Cibele)' },
            { name: 'Café com Água com Gás', unit: '350 ml', price: 'R$ 30,00', novo: true, note: 'Xarope de limão, gelo e canela.' },
            { name: 'Café Latte Gelado', unit: '350 ml', price: 'R$ 26,00', vegan: true, note: 'Espresso doppio, leite vegetal e leite vegetal cremoso.' },
            { name: 'Café Latte Gelado', unit: '350 ml', price: 'R$ 23,00', note: 'Espresso doppio, leite e leite cremoso.' },
            { name: 'Cappuccino Sow Gelado', unit: '250 ml', price: 'R$ 27,50', vegan: true, note: 'Com leite vegetal e calda de chocolate vegano (cacau 100%).' },
            { name: 'Citrus', unit: '350 ml', price: 'R$ 25,00', note: 'Café espresso, limão e suco de laranja.' },
            { name: 'Cappuccino Sow Gelado', unit: '250 ml', price: 'R$ 24,00', note: 'Espresso, leite, chocolate gelado feito com nossa receita exclusiva e chantilly.' },
            { name: 'Cappuccino Sow de Doce de Leite Gelado', unit: '250 ml', price: 'R$ 24,00', note: 'Espresso, leite, doce de leite e chantilly.' },
            { name: 'Affogato', unit: '150 ml', price: 'R$ 23,00', note: 'Sorvete de creme e café espresso.' },
            { name: 'Espresso Romano Gelado', unit: '250 ml', price: 'R$ 22,00', note: 'Espresso doppio com xarope de limão, aromatizado com limão siciliano.' }
          ]
        }
      ]
    },
    {
      id: 'chocolates',
      title: 'Chocolates',
      groups: [
        {
          title: 'Quentes',
          keywords: 'chocolate quente',
          items: [
            { name: 'Chocolate Quente Grande', unit: '200 ml', price: 'R$ 25,00', vegan: true, note: 'Feito com leite vegetal e calda vegana (cacau 100%).' },
            { name: 'Chocolate Quente Grande', unit: '200 ml', price: 'R$ 23,00', note: 'Feito com nossa receita exclusiva e chantilly.' },
            { name: 'Chocolate Quente Médio', unit: '150 ml', price: 'R$ 22,00', vegan: true, note: 'Feito com leite vegetal e calda vegana (cacau 100%).' },
            { name: 'Chocolate Quente Médio', unit: '150 ml', price: 'R$ 18,00', note: 'Feito com nossa receita exclusiva.' },
            { name: 'Chocolate Quente Pequeno', unit: '50 ml', price: 'R$ 17,00', vegan: true, note: 'Feito com leite vegetal e calda vegana (cacau 100%).' },
            { name: 'Chocolate Quente Pequeno', unit: '50 ml', price: 'R$ 15,00', note: 'Feito com nossa receita exclusiva.' }
          ]
        },
        {
          title: 'Gelados',
          keywords: 'chocolate gelado',
          items: [
            { name: 'Chocolate Gelado', unit: '350 ml', price: 'R$ 28,50', vegan: true, note: 'Feito com leite vegetal e calda vegana (cacau 100%).' },
            { name: 'Chocolate Gelado', unit: '350 ml', price: 'R$ 26,00', note: 'Feito com nossa receita exclusiva e chantilly.' }
          ]
        }
      ]
    },
    {
      id: 'chas',
      title: 'Chás',
      groups: [
        {
          title: 'Quentes',
          note: 'Consulte a carta de chás para mais informações.',
          keywords: 'cha chai infusao blend quente',
          items: [
            { name: 'Masala Chai com Leite Vegetal', unit: '200 ml', price: 'R$ 28,00', vegan: true },
            { name: 'Masala Chai com Leite', unit: '200 ml', price: 'R$ 24,00' },
            { name: 'Masala Chai com Água', unit: '200 ml', price: 'R$ 22,00' },
            { name: 'Chás e Blends de Chás', unit: '200 ml', price: 'R$ 24,00' },
            { name: 'Infusão Floral', unit: '200 ml', price: 'R$ 22,00' },
            { name: 'Infusão Frutal', unit: '200 ml', price: 'R$ 22,00' },
            { name: 'Infusão Herbal', unit: '200 ml', price: 'R$ 22,00' },
            { name: 'Rooibos', unit: '200 ml', price: 'R$ 22,00', note: 'Infusão da África do Sul.' }
          ]
        },
        {
          title: 'Gelados',
          keywords: 'cha gelado matcha chai iced tea',
          items: [
            { name: 'Matcha com Leite Vegetal e Gelo', unit: '350 ml', price: 'R$ 28,00', vegan: true },
            { name: 'Matcha com Leite Vegetal, Xarope de Morango e Gelo', unit: '350 ml', price: 'R$ 30,00', vegan: true, note: 'Xarope natural de morango.' },
            { name: 'Masala Chai com Leite Vegetal e Gelo', unit: '350 ml', price: 'R$ 28,00', vegan: true },
            { name: 'Masala Chai com Leite e Gelo', unit: '350 ml', price: 'R$ 24,00' },
            { name: '“Themo Tea”', unit: '350 ml', price: 'R$ 24,00', note: 'Refrescante, termogênico e digestivo.' },
            { name: 'Infusão Floral, Frutal ou Herbal com Gelo', unit: '350 ml', price: 'R$ 24,00' }
          ]
        }
      ]
    },
    {
      id: 'combos',
      title: 'Combos',
      groups: [
        {
          title: 'Sow Matinal',
          note: 'Todos os dias até 13h. Não trocamos itens dos combos.',
          keywords: 'cafe da manha combo matinal',
          items: [
            { name: 'Sow Matinal', price: 'R$ 90,00', note: 'Bebida (200 ml): laranja, chocolate gelado com leite integral ou com leite vegetal • Lanche: misto quente, minas com peito de peru, pão de queijo sem glúten (5 un.) ou caponata de legumes com pasta de azeitonas no pão ciabatta • Sobremesa: bolo do dia (cuca de banana ou de maçã), bolo sem glúten de milho cremoso, cinnamon roll ou bolo de laranja com cenoura (vegano) • Acompanhamento: salada de frutas ou ovos mexidos com ou sem bacon (180 g) • Bebida quente: espresso ou espresso macchiato.' }
          ]
        },
        {
          title: 'Outras opções',
          note: 'Todos os dias até 13h.',
          keywords: 'cafe da manha ovo omelete pao chapa granola',
          items: [
            { name: 'Omelete com Queijo Parmesão', price: 'R$ 32,00', note: 'Acompanha torradas de pão ciabatta.' },
            { name: 'Salada de Frutas com Chia', unit: '265 ml', price: 'R$ 20,00' },
            { name: 'Pão na Chapa — Ciabatta', price: 'R$ 14,00' },
            { name: 'Pão na Chapa — Croissant', price: 'R$ 20,00' },
            { name: '+ Cream Cheese', price: 'R$ 6,00' },
            { name: 'Ovo Extra', price: 'R$ 12,00' },
            { name: 'Porção de Ovos Mexidos', unit: '265 ml', price: 'R$ 28,00' },
            { name: 'Granola Doce da Casa', unit: '100 g', price: 'R$ 24,00', note: 'Aveia, semente de girassol, castanha-do-pará, castanha de caju, uva-passa e amêndoas.' }
          ]
        }
      ]
    },
    {
      id: 'bolos',
      title: 'Bolos',
      groups: [
        {
          title: 'Carta de Bolos',
          note: 'Preço da fatia. Bolos inteiros na seção “Bolos inteiros”.',
          keywords: 'bolo fatia doce torta',
          items: [
            { name: 'Cheesecake', unit: 'fatia', price: 'R$ 24,00', note: 'Base de bolacha maisena, massa de cream cheese, açúcar de confeiteiro e suco de limão. Pode ser servido com calda de frutas vermelhas artesanal, doce de leite ou goiabada.' },
            { name: 'Cheesecake com Nutella', unit: 'fatia', price: 'R$ 30,00' },
            { name: 'Red Velvet', unit: 'fatia', price: 'R$ 24,00', note: 'Considerado um dos melhores de São Paulo. Massa de cacau, recheado e coberto com creme de cream cheese, morangos picados no meio e frutas vermelhas da época.' },
            { name: 'Apple Pie', unit: 'fatia', price: 'R$ 24,00', note: 'Massa amanteigada, recheada com maçãs laminadas e canela.' },
            { name: 'Apple Pie com Sorvete', unit: 'fatia', price: 'R$ 33,00', note: 'Quentinha, com uma bola de sorvete de creme.' },
            { name: 'Brownie', unit: 'fatia', price: 'R$ 24,00', note: 'Feito com chocolate meio amargo e cacau.' },
            { name: 'Limão Siciliano com Amora', unit: 'fatia', price: 'R$ 24,00', note: 'Bolo úmido com amêndoas, amoras e o sabor cítrico do limão siciliano.' },
            { name: 'Sow', unit: 'fatia', price: 'R$ 24,00', note: 'O bolo da casa, feito com amêndoas e castanhas, aromatizado com água de flor de laranjeira e suco de laranja.' },
            { name: 'D’ouro', unit: 'fatia', price: 'R$ 24,00', note: 'Massa de amêndoas com tangerinas uruguaias, umedecida com suco de tangerina e calda de tangerina.' },
            { name: 'Chocolate com Morango', unit: 'fatia', price: 'R$ 22,00', note: 'Massa de cacau coberta com ganache de chocolate meio amargo e morangos frescos.' },
            { name: 'Limão com Morango', unit: 'fatia', price: 'R$ 21,00' },
            { name: 'Banana Toffee', unit: 'fatia', price: 'R$ 21,00', note: 'Banana-nanica, caramelo toffee e castanhas de caju caramelizadas.' },
            { name: 'Banana com Gotas de Chocolate', unit: 'fatia', price: 'R$ 21,00' },
            { name: 'Cenoura com Ganache', unit: 'fatia', price: 'R$ 21,00', note: 'Cenoura e ganache de chocolate meio amargo. (Não contém leite na massa.)' },
            { name: 'Bolo Cuca de Banana', unit: 'fatia', price: 'R$ 20,00', novo: true, note: 'Bolo fofinho com camada de bananas maduras e cobertura de farofa crocante com canela.' },
            { name: 'Bolo Cuca de Maçã', unit: 'fatia', price: 'R$ 20,00', novo: true, note: 'Massa fofinha e úmida, cobertura crocante de farofa doce (streusel) e maçãs suculentas com canela.' },
            { name: 'Laranja', unit: 'fatia', price: 'R$ 20,00', note: 'Receita única de bolo de laranja bem fofinho. Acompanha calda de laranja. (Não contém leite.)' },
            { name: 'Fubá com Goiabada', unit: 'fatia', price: 'R$ 20,00', note: 'Macio e úmido, servido com goiabada cremosa.' },
            { name: 'Bolo de Coco Gelado', unit: 'fatia', price: 'R$ 24,00', note: 'Bolo molhadinho de coco com calda de leite condensado.' }
          ]
        },
        {
          title: 'Tortas & Bolos Integrais',
          keywords: 'bolo integral torta pera banana',
          items: [
            { name: 'Torta de Pera', unit: 'fatia', price: 'R$ 24,00', note: 'Massa de amêndoas com peras, decorada com peras.' },
            { name: 'Torta Integral de Banana com Damasco e Passas', unit: 'fatia', price: 'R$ 24,00', note: 'Base de bolacha maisena, aveia, banana-nanica, damasco e passas. (100% açúcar mascavo)' }
          ]
        },
        {
          title: 'Sem Glúten',
          note: 'Podendo conter traços.',
          keywords: 'bolo sem gluten celiaco',
          items: [
            { name: 'Gianduia', unit: 'fatia', price: 'R$ 24,00', note: 'Bolo cremoso feito com chocolate meio amargo e avelãs. (100% açúcar mascavo)' },
            { name: 'Milho Verde', unit: 'fatia', price: 'R$ 20,00', note: 'Bolo cremoso de milho com coco ralado.' }
          ]
        },
        {
          title: 'Sem Glúten e Sem Lactose',
          note: 'Podendo conter traços.',
          keywords: 'bolo sem gluten sem lactose',
          items: [
            { name: 'Lumberjack Cake', unit: 'fatia', price: 'R$ 24,00', note: 'Bolo de tâmaras, maçã, castanhas, coco e rum. (100% açúcar demerara)' },
            { name: 'Chocolate', unit: 'fatia', price: 'R$ 24,00', note: 'Bolo fofinho feito com cacau. Acompanha calda de chocolate sem lactose.' }
          ]
        },
        {
          title: 'Bolos Fit',
          note: 'Sem açúcar e sem adoçante.',
          keywords: 'bolo fit sem acucar diet',
          items: [
            { name: 'Fit de Tâmaras, Ameixa, Nozes, Damasco e Uva-Passa', unit: 'fatia', price: 'R$ 24,00', note: 'Bolo de banana com tâmaras, passas, amêndoas, damasco e nozes. Acompanha calda de especiarias. (Sem glúten e sem lactose)' },
            { name: 'Fit de Ameixa', unit: 'fatia', price: 'R$ 22,00', note: 'Bolo de ameixa com castanhas e banana. Acompanha calda de especiarias. (Sem glúten e sem lactose)' },
            { name: 'Fit de Maçã com Damasco e Nozes', unit: 'fatia', price: 'R$ 22,00', note: 'Bolo de maçã com damasco e nozes. (Sem glúten e sem lactose)' }
          ]
        },
        {
          title: 'Bolos Veganos',
          note: 'Não contêm ingredientes de origem animal.',
          keywords: 'bolo vegano vegan',
          items: [
            { name: 'Chocolate com Castanha', unit: 'fatia', price: 'R$ 22,00', vegan: true, note: 'Massa de cacau e pedaços de castanhas. (100% açúcar mascavo) Acompanha calda de chocolate vegana.' },
            { name: 'Limão', unit: 'fatia', price: 'R$ 22,00', vegan: true, note: 'Bolo fofinho com o cítrico do limão, coberto com glacê de limão.' },
            { name: 'Banana com Nozes', unit: 'fatia', price: 'R$ 22,00', vegan: true, note: 'Bolo fofinho feito com banana, maçã, leite de coco e nozes.' },
            { name: 'Cenoura com Laranja', unit: 'fatia', price: 'R$ 22,00', vegan: true, note: 'Acompanha calda de chocolate vegana.' }
          ]
        }
      ]
    },
    {
      id: 'bolos-inteiros',
      title: 'Bolos inteiros',
      groups: [
        {
          title: 'Bolos Nakeds',
          note: 'Todos sob encomenda.',
          keywords: 'bolo inteiro naked encomenda festa aniversario',
          items: [
            { name: 'Doce de Leite com Nozes', unit: 'kg', price: 'R$ 170,00' },
            { name: 'Leite Ninho com Morango', unit: 'kg', price: 'R$ 170,00' },
            { name: 'Chocolate com Morango', unit: 'kg', price: 'R$ 170,00' },
            { name: 'Mousse de Chocolate', unit: 'kg', price: 'R$ 170,00' }
          ]
        },
        {
          title: 'Carta de Bolos',
          note: 'Consulte disponibilidade ou encomende pelo WhatsApp.',
          keywords: 'bolo inteiro encomenda',
          items: [
            { name: 'Cheesecake', unit: 'kg', price: 'R$ 170,00' },
            { name: 'Red Velvet', unit: 'kg', price: 'R$ 170,00' },
            { name: 'Apple Pie', unit: 'kg', price: 'R$ 170,00' },
            { name: 'Brownie', unit: 'unid.', price: 'R$ 150,00' },
            { name: 'Limão Siciliano com Amora', unit: 'unid.', price: 'R$ 150,00' },
            { name: 'Sow', unit: 'unid.', price: 'R$ 150,00' },
            { name: 'D’ouro', unit: 'unid.', price: 'R$ 150,00' },
            { name: 'Chocolate com Morango', unit: 'unid.', price: 'R$ 120,00' },
            { name: 'Limão com Morango', unit: 'unid.', price: 'R$ 110,00' },
            { name: 'Banana Toffee', unit: 'unid.', price: 'R$ 110,00' },
            { name: 'Banana com Gotas de Chocolate', unit: 'unid.', price: 'R$ 110,00' },
            { name: 'Cenoura com Ganache', unit: 'unid.', price: 'R$ 110,00' },
            { name: 'Bolo Cuca de Banana', unit: 'unid.', price: 'R$ 100,00', novo: true },
            { name: 'Bolo Cuca de Maçã', unit: 'unid.', price: 'R$ 100,00', novo: true },
            { name: 'Laranja', unit: 'unid.', price: 'R$ 100,00' },
            { name: 'Fubá com Goiabada', unit: 'unid.', price: 'R$ 100,00' }
          ]
        },
        {
          title: 'Integrais, Sem Glúten e Fit',
          keywords: 'bolo inteiro integral sem gluten sem lactose fit',
          items: [
            { name: 'Torta de Pera', unit: 'kg', price: 'R$ 170,00' },
            { name: 'Torta Integral de Banana com Damasco e Passas', unit: 'kg', price: 'R$ 170,00' },
            { name: 'Gianduia (sem glúten)', unit: 'unid.', price: 'R$ 150,00' },
            { name: 'Milho Verde (sem glúten)', unit: 'unid.', price: 'R$ 100,00' },
            { name: 'Lumberjack Cake (sem glúten e sem lactose)', unit: 'unid.', price: 'R$ 120,00' },
            { name: 'Chocolate (sem glúten e sem lactose)', unit: 'unid.', price: 'R$ 120,00' },
            { name: 'Fit de Tâmaras, Ameixa, Nozes, Damasco e Uva-Passa', unit: 'unid.', price: 'R$ 130,00' },
            { name: 'Fit de Ameixa', unit: 'unid.', price: 'R$ 120,00' },
            { name: 'Fit de Maçã com Damasco e Nozes', unit: 'unid.', price: 'R$ 120,00' }
          ]
        },
        {
          title: 'Veganos',
          keywords: 'bolo inteiro vegano',
          items: [
            { name: 'Chocolate com Castanha', unit: 'unid.', price: 'R$ 120,00', vegan: true },
            { name: 'Limão', unit: 'unid.', price: 'R$ 120,00', vegan: true },
            { name: 'Banana com Nozes', unit: 'unid.', price: 'R$ 120,00', vegan: true },
            { name: 'Cenoura com Laranja', unit: 'unid.', price: 'R$ 120,00', vegan: true }
          ]
        }
      ]
    },
    {
      id: 'delicias',
      title: 'Delícias',
      groups: [
        {
          title: 'Brownie',
          keywords: 'brownie chocolate nutella',
          items: [
            { name: 'Brownie com Cobertura Nutella', price: 'R$ 30,00' },
            { name: 'Brownie com Cobertura', price: 'R$ 28,00', note: 'Sugestão de cobertura: geleia artesanal de frutas vermelhas, doce de leite ou ganache.' },
            { name: 'Brownie sem Cobertura', price: 'R$ 24,00' }
          ]
        },
        {
          title: 'Cookies',
          keywords: 'cookie biscoito',
          items: [
            { name: 'Mini Cookie', unit: '100 g', price: 'R$ 24,00', note: 'Mini cookies com gotas de chocolate meio amargo.' },
            { name: 'Cookie Sow', price: 'R$ 14,00', note: 'Gotas de chocolate meio amargo, pedaços de nozes e castanhas.' },
            { name: 'Cookie Três Chocolates', price: 'R$ 14,00', note: 'Gotas de chocolate meio amargo, branco e ao leite.' }
          ]
        },
        {
          title: 'Cinnamon',
          keywords: 'cinnamon roll canela',
          items: [
            { name: 'Cinnamon Roll', price: 'R$ 18,00', note: 'Pão doce amanteigado, enrolado com açúcar e canela. Servido quentinho com calda de cream cheese.' }
          ]
        },
        {
          title: 'Sobremesas',
          keywords: 'sobremesa bowl acai iogurte waffle',
          items: [
            { name: 'Bowl de Abacate', price: 'R$ 38,00', note: 'Com mirtilo fresco, goji berry, morango, aveia, chia e mel. Acompanha granola da casa. (Verifique a disponibilidade.)' },
            { name: 'Bowl de Açaí', price: 'R$ 38,00', note: 'Palmeira-juçara com banana. Banana, morango, chia, aveia, goji berry e hortelã. Acompanha granola da casa.' },
            { name: 'Bowl de Iogurte', price: 'R$ 38,00', note: 'Iogurte, mirtilo fresco, morango, banana, chia, hortelã e mel. Acompanha granola da casa.' },
            { name: 'Bowl de Iogurte com Calda de Frutas Vermelhas', price: 'R$ 30,00' },
            { name: 'Sobremesa de Brownie', price: 'R$ 38,00', note: 'Ganache, sorvete de creme e brownie, coberta com chantilly e morangos.' },
            { name: 'Waffle', price: 'R$ 24,00', note: 'Escolha a cobertura: manteiga e mel, geleia de frutas vermelhas artesanal ou banana e mel.' },
            { name: 'Waffle com Nutella', price: 'R$ 30,00' }
          ]
        },
        {
          title: 'Extras',
          note: 'Sorvetes Instituto Auá.',
          keywords: 'sorvete cobertura extra',
          items: [
            { name: 'Sorvete — 1 bola Uvaia', price: 'R$ 17,00' },
            { name: 'Sorvete — 1 bola Cambuci', price: 'R$ 17,00' },
            { name: 'Sorvete — 1 bola Creme', price: 'R$ 17,00' },
            { name: 'Cobertura extra para fatias', price: 'R$ 14,00' },
            { name: 'Cobertura extra para fatias — Nutella', price: 'R$ 19,00' },
            { name: 'Cobertura extra para bolo inteiro', price: 'R$ 40,00' },
            { name: 'Cobertura extra para bolo inteiro — Nutella', price: 'R$ 45,00' }
          ]
        }
      ]
    },
    {
      id: 'lanches',
      title: 'Toasts & Lanches',
      groups: [
        {
          title: 'Toasts',
          note: 'Receitas exclusivas. Nossos pães são artesanais.',
          keywords: 'toast torrada levain',
          items: [
            { name: 'Toast de Salmão', price: 'R$ 55,00', note: 'No pão levain, com salmão curado, sour cream, ovos mexidos, tomate-cereja, gergelim preto e brotos.' },
            { name: 'Toast de Abacate', price: 'R$ 45,00', note: 'No pão levain, com creme de abacate temperado, ovo, bacon, tomatinho-cereja, chia e broto. (Verifique a disponibilidade.)' },
            { name: 'Toast de Brie', price: 'R$ 45,00', novo: true, note: 'No pão levain, com pera caramelizada, mel, sour cream, flor de sal e raspas de limão.' },
            { name: 'Toast de Presunto Parma', price: 'R$ 45,00', novo: true, note: 'No pão levain, com figo, sour cream, mel, flor de sal e raspas de limão.' },
            { name: 'Toast de Pesto', price: 'R$ 42,00', note: 'No pão levain, com pasta de pesto, muçarela de búfala, tomate confit colorido e rúcula. Acompanha molho de redução de vinho.' },
            { name: 'Toast de Espinafre', price: 'R$ 42,00', vegan: true, note: 'No pão levain, com ricota de amêndoas, sementes tostadas e espinafre refogado. Acompanha melaço.' },
            { name: 'Tartine de Cogumelo', price: 'R$ 42,00', note: 'Mix de cogumelos com muçarela de búfala fresca, tomate-cereja e manjericão no pão ciabatta, regado com azeite de ervas.' },
            { name: 'Bruschetta', price: 'R$ 38,00', note: 'Tomate confit com parmesão gratinado e folhas de manjericão no pão ciabatta.' }
          ]
        },
        {
          title: 'Lanches',
          keywords: 'lanche sanduiche ciabatta',
          items: [
            { name: 'Parma', price: 'R$ 50,00', note: 'Presunto parma com muçarela de búfala, rúcula e finas fatias de tomate no pão ciabatta.' },
            { name: 'Rosbife', price: 'R$ 50,00', note: 'Rosbife (receita da casa), muçarela de búfala e molho de rúcula (cream cheese, castanha-do-pará e rúcula) no pão ciabatta.' },
            { name: 'Pastrami', price: 'R$ 50,00', note: 'Pastrami (defumado com lenha frutífera), pepino em conserva, muçarela de búfala, mostarda Dijon, mostarda amarela e azeite de ervas no pão ciabatta.' },
            { name: 'Croque Monsieur', price: 'R$ 44,00', note: 'Pão brioche artesanal com presunto, queijo muçarela, molho bechamel e queijo muçarela e parmesão gratinado.' },
            { name: 'Vegano', price: 'R$ 38,00', vegan: true, note: 'Caponata de legumes (berinjela, abobrinha, cebola, tomate, castanha-do-pará) e pasta de azeitona no pão ciabatta.' },
            { name: 'Queijo Minas com Peito de Peru', price: 'R$ 30,00' },
            { name: 'Misto Quente', price: 'R$ 28,00', note: 'Queijo prato e presunto.' },
            { name: 'Croissant', price: 'R$ 22,00', note: 'Com manteiga e geleia de frutas vermelhas da casa.' }
          ]
        }
      ]
    },
    {
      id: 'salgados',
      title: 'Salgados',
      groups: [
        {
          title: 'Tortas',
          keywords: 'torta salgada frango palmito',
          items: [
            { name: 'Frango Desfiado com Milho Verde e Cream Cheese', unit: 'fatia', price: 'R$ 35,00' },
            { name: 'Palmito em Cubos, Tomate, Azeitona Preta, Cream Cheese e Salsinha', unit: 'fatia', price: 'R$ 35,00' }
          ]
        },
        {
          title: 'Quiches',
          keywords: 'quiche',
          items: [
            { name: 'Espinafre com Ricota', price: 'R$ 30,00' },
            { name: 'Alho-Poró com Provolone', price: 'R$ 30,00' },
            { name: 'Tortas e Quiches Congeladas', unit: 'kg', price: 'R$ 170,00' }
          ]
        },
        {
          title: 'Pão de Queijo',
          keywords: 'pao de queijo',
          items: [
            { name: 'Porção de Mini Pão de Queijo Vegano', unit: '10 un.', price: 'R$ 25,00', vegan: true, note: 'Feito com batata-doce, mandioquinha e castanha de caju.' },
            { name: 'Porção de Mini Pão de Queijo Mineiro', unit: '10 un.', price: 'R$ 27,00' },
            { name: 'Extra: Manteiga', price: 'R$ 6,00' },
            { name: 'Extra: Doce de Leite', price: 'R$ 6,00' },
            { name: 'Extra: Cream Cheese', price: 'R$ 6,00' },
            { name: 'Extra: Goiabada', price: 'R$ 6,00' }
          ]
        },
        {
          title: 'Experimente!',
          keywords: 'empanada argentina',
          items: [
            { name: 'Porção de Mini Empanada', unit: '5 un.', price: 'R$ 38,00', note: 'Frango, queijo e carne.' },
            { name: 'Empanada Argentina', price: 'R$ 20,00', note: 'Sabores: carne moída, frango, cebola ou 3 queijos.' }
          ]
        }
      ]
    },
    {
      id: 'almoco',
      title: 'Almoço',
      groups: [
        {
          title: 'Caldos',
          note: 'Comidinhas saudáveis todos os dias a partir das 11h30. Caldos de 440 ml, acompanham torradinhas.',
          keywords: 'caldo sopa creme',
          items: [
            { name: 'Caldo de Mandioquinha com Carne-Seca', unit: '440 ml', price: 'R$ 48,00' },
            { name: 'Caldo Verde', unit: '440 ml', price: 'R$ 50,00' },
            { name: 'Caldo de Abóbora com Gengibre', unit: '440 ml', price: 'R$ 48,00', vegan: true },
            { name: 'Creme de Brócolis com Queijo e Amêndoas Laminadas Torradas', unit: '440 ml', price: 'R$ 50,00' }
          ]
        },
        {
          title: 'Pratos da Casa',
          note: 'Escolha 3 acompanhamentos: arroz, feijão, legumes cozidos ou purê de batata. Acompanham saladinha da casa com molho a escolher (pesto, mostarda e mel ou redução de vinho).',
          keywords: 'prato almoco refeicao',
          items: [
            { name: 'Filé Mignon', price: 'R$ 70,00' },
            { name: 'Tilápia', price: 'R$ 65,00' },
            { name: 'Peito de Frango', price: 'R$ 60,00' }
          ]
        },
        {
          title: 'Massas',
          note: 'Escolha o molho: ao sugo ou branco.',
          keywords: 'massa macarrao ravioli',
          items: [
            { name: 'Agnolotti de Burrata com Limão Siciliano', price: 'R$ 70,00', novo: true },
            { name: 'Ravioli de Carne de Panela', price: 'R$ 60,00', novo: true },
            { name: 'Ravioli de Muçarela com Manjericão', price: 'R$ 70,00', novo: true },
            { name: 'Fettuccine (Kids)', price: 'R$ 55,00', novo: true }
          ]
        },
        {
          title: 'Risotos',
          keywords: 'risoto',
          items: [
            { name: 'Risoto com Cogumelos', price: 'R$ 70,00', note: 'Shiitake, shimeji e paris, finalizado com búfala fresca, tomate-cereja, parmesão e brotos.' },
            { name: 'Risoto de Açafrão', price: 'R$ 60,00', novo: true, note: 'Finalizado com brotos e parmesão.' },
            { name: 'Risoto ao Limone', price: 'R$ 60,00', novo: true, note: 'Finalizado com raspas de limão siciliano e parmesão.' }
          ]
        },
        {
          title: 'Proteínas',
          keywords: 'proteina carne peixe frango',
          items: [
            { name: 'Salmão', price: 'R$ 38,00' },
            { name: 'Filé Mignon', price: 'R$ 35,00' },
            { name: 'Polpetone', price: 'R$ 32,00', note: 'Carne moída recheada com muçarela, gratinada com queijo parmesão e molho ao sugo.' },
            { name: 'Tilápia', price: 'R$ 30,00' },
            { name: 'Peito de Frango', price: 'R$ 30,00' }
          ]
        },
        {
          title: 'Saladas Especiais',
          keywords: 'salada',
          items: [
            { name: 'Salada de Figo', price: 'R$ 42,00', note: 'Mix de folhas verdes, queijo gorgonzola, figo e sementes de romã. Molho de vinho e melaço.' },
            { name: 'Salada Cítrica', price: 'R$ 42,00', note: 'Mix de folhas verdes, laranja-baía, abacate e cebola roxa. Molho cítrico com mostarda ancienne e mel. (Verifique a disponibilidade.)' },
            { name: 'Salada Caprese', price: 'R$ 42,00', note: 'Mix de folhas verdes, muçarela de búfala, nozes, tomate-cereja, damasco, manjericão, azeitona preta e croutons com molho pesto.' },
            { name: 'Salada Verde', price: 'R$ 38,00', note: 'Mix de folhas verdes e granola da casa. Molho à escolha: mostarda e mel, pesto ou redução de vinho.' },
            { name: 'Omelete', price: 'R$ 32,00', note: 'Com queijo parmesão e tomate-cereja. Acompanha torradinhas.' }
          ]
        }
      ]
    },
    {
      id: 'bebidas',
      title: 'Bebidas',
      groups: [
        {
          title: 'Drinks não alcoólicos',
          keywords: 'drink refresh refrescante sem alcool',
          items: [
            { name: 'Sow Refresh de Morango', unit: '400 ml', price: 'R$ 30,00', note: 'Xarope natural de morango, geleia de morango, decorado com morango e hortelã.' },
            { name: 'Sow Refresh de Maracujá', unit: '400 ml', price: 'R$ 30,00', note: 'Xarope de maracujá natural, polpa de maracujá congelada, decorado com mel, zimbro, manjericão e hortelã.' },
            { name: 'Sow Refresh de Limão', unit: '400 ml', price: 'R$ 30,00', note: 'Xarope natural de limão siciliano com pimenta-rosa, calda de glacê de limão, decorado com limão-taiti, limão siciliano e hortelã.' }
          ]
        },
        {
          title: 'Sucos',
          keywords: 'suco natural limonada',
          items: [
            { name: 'Limonada de Coco', unit: '360 ml', price: 'R$ 26,00', note: 'Leite de coco, limão, açúcar, hortelã e gelo.' },
            { name: 'Frutas Vermelhas com Laranja', unit: '350 ml', price: 'R$ 25,00' },
            { name: 'Açaí', unit: '350 ml', price: 'R$ 25,00', note: 'Palmeira-juçara com banana.' },
            { name: 'Suco Verde', unit: '350 ml', price: 'R$ 25,00', note: 'Água de coco, couve, abacaxi e maçã.' },
            { name: 'Betacaroteno', unit: '350 ml', price: 'R$ 25,00', note: 'Laranja, cenoura e beterraba.' },
            { name: 'Detox', unit: '350 ml', price: 'R$ 25,00', note: 'Laranja, maçã, cenoura, beterraba e abacaxi.' },
            { name: 'Frutas Vermelhas com Água', unit: '350 ml', price: 'R$ 23,00' },
            { name: 'Melancia com Água de Coco', unit: '350 ml', price: 'R$ 20,00' },
            { name: 'Maracujá', unit: '350 ml', price: 'R$ 20,00' },
            { name: 'Limonada Suíça', unit: '350 ml', price: 'R$ 20,00', note: 'Água e limão batido com casca, adoçado com leite condensado.' },
            { name: 'Abacaxi com Hortelã e Gengibre', unit: '350 ml', price: 'R$ 18,00' },
            { name: 'Laranja', unit: '350 ml', price: 'R$ 18,00' },
            { name: 'Limonada', unit: '350 ml', price: 'R$ 18,00', note: 'Água e limão batido com casca.' },
            { name: 'Água de Coco', unit: '350 ml', price: 'R$ 14,00' }
          ]
        },
        {
          title: 'Outras bebidas',
          keywords: 'refrigerante agua cerveja mimosa',
          items: [
            { name: 'Coca-Cola', unit: 'lata 350 ml', price: 'R$ 12,00', note: 'Normal e zero.' },
            { name: 'Guaraná', unit: 'lata 350 ml', price: 'R$ 12,00', note: 'Normal e zero.' },
            { name: 'Schweppes', unit: 'lata 350 ml', price: 'R$ 12,00' },
            { name: 'Água Tônica', unit: 'lata 350 ml', price: 'R$ 12,00' },
            { name: 'Água Mineral com Gás', unit: '310 ml', price: 'R$ 11,00' },
            { name: 'Água Mineral sem Gás', unit: '310 ml', price: 'R$ 10,00' },
            { name: 'Heineken', unit: 'long neck 330 ml', price: 'R$ 18,00' },
            { name: 'Mimosa', unit: '500 ml', price: 'R$ 60,00', note: 'Espumante, suco de laranja e gelo.' }
          ]
        }
      ]
    }
  ]
};
