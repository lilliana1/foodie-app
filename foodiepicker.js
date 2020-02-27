function go() {
    var text = document.getElementById('text');
    var e = document.getElementById('selector');
    var foodType = e.options[e.selectedIndex].value;


    if (foodType == 'seafood') {
        var seafood = ['El Rodaballo', 'Que PezCa\'o', 'Ladi\'s Restaurant', 'Cueva del Mar', 'Cayo Caribe', 'Marisquería Atlántica', 'Cayo Blanco',
            'Altamar Condado', 'La Tasca El Pescador', 'Reina del Mar', 'El Asador'];
        var random_Seafood = seafood[Math.floor(Math.random() * seafood.length)];
        text.value = random_Seafood;


    }

    if (foodType == 'sandwich') {
        var sandwich = ['El Horno de Panne', 'Moncho', 'Kasalta', 'Caffé Melanzana', 'Panaderia España'
            , 'Pinky\'s', 'El Churry', 'Ponte Fresco', 'Sobao by Los Cidrines', 'Pannes'];
        var random_Sandwich = sandwich[Math.floor(Math.random() * sandwich.length)];
        text.value = random_Sandwich;


    }

    if (foodType == 'italian') {
        var italian = ['Bocca Osteria Romana', 'Nonna Cucina Rustica', 'La Cucina di Ivo', 'Si No Corro Me Pizza', 'Puttanesca',
            'Via Appia\'s', 'Melanzana Bistro & Pizzeria', 'Il Nonno', 'Di Zucchero', 'Il Postino Miramar', 'Il Giardino',
            'Italian House Il Nonno', 'Il Nuevo Perugino Enoteca', 'Candela', 'L\'osteria', 'La Cucina di Ivo', 'Gusto Di Italia',
            'The Mac\' and Cheese', 'Serafina', 'Il Nuovo Mercato San Juan', 'Seccarelli Ristorante', 'Cacio E Pepe', 'Si No Corro Me Pizza'];
        var random_Italian = italian[Math.floor(Math.random() * italian.length)];
        text.value = random_Italian;


    }

    if (foodType == 'asian') {
        var asian = ['East Asia Bistro', 'WOK It!', 'Silk Oriental Cuise', 'Tayzan', 'Sushi Boat', 'Nigiri', 'Kintaro', 'New Taste', 'Mai Pen Rai', 'El Baoricua',
            'Peko Peko', 'Origami Sushi', 'Bento Box', 'Thon Thai', 'Ujeong', 'Baoricua'];
        var rand_Asian = asian[Math.floor(Math.random() * asian.length)];
        text.value = rand_Asian;


    }

    if (foodType == 'market') {
        var market = ['Vianda', 'Cocina al Fondo', '1919'];
        var rand_Market = market[Math.floor(Math.random() * market.length)];
        text.value = rand_Market;


    }

    if (foodType == 'mexican') {
        var mexican = ['Sr. Bigotes', 'Acapulco', 'Tacolandia', 'Panuchos', 'Aurorita', 'Uorale Taqueria Mexican', 'La B de Burro', 'La Doña Suchville', 'Híjole', 'La Revolución', 'Guadalajara Mexican Restaurant & Margarita Bar'
            , 'Chilango Bar & Grill', 'Cantina Laredo', 'Calavera Mexican Restaurant & Cantina', 'Nacho libre Cantina', 'El Axolote', 'Frida\'s',
            'La Patrona Cocina Mexicana', 'La Madre', 'Sabor de México', 'Tomate Mexican Fusion', 'Huachinango'];
        var rand_Mexican = mexican[Math.floor(Math.random() * mexican.length)];
        text.value = rand_Mexican;


    }

    if (foodType == 'bbq') {
        var bbq = ['San Juan Smokehouse'];
        var rand_bbq = bbq[Math.floor(Math.random() * bbq.length)];
        text.value = rand_bbq;


    }
    if (foodType == 'argentinian') {
        var argentinian = ['Caminito', 'Tierra de Fuego', 'Mis Buenos Aires Querido', 'Catalina Argentine Grill', 'Catalina', 'Argento', 'El Viejo Almacén Argentinian Cuisine', 'Ferrari Gourmet Restaurant',
            '1041 Gastronomía de Barrio', '34 Sur', 'Buenos Ayres & Grill'];
        var rand_argentinian = argentinian[Math.floor(Math.random() * argentinian.length)];
        text.value = rand_argentinian;


    }
    if (foodType == 'puertoRican') {
        var puertoRican = ['Cueva del Mar', 'Cayo Caribe', 'Casita Criolla', 'Chicharrón', 'Latin Star Restaurant', 'El Fogoón del Rey',
            'Ropa Vieja', 'Mi Casita', 'Barrachina', 'Melao', 'Sabor Tropical', 'La Casita Blanca', 'Casita Miramar', 'Yeyo\'s', 'Doña Ana', 'Vaca Brava'
            , 'Sabrina Brunch & Bistro Bar', 'La Habichuela Guisá', 'The Latin Roots', 'Cinema Bar 1950'];
        var rand_pr = puertoRican[Math.floor(Math.random() * puertoRican.length)];
        text.value = rand_pr;


    }
    if (foodType == 'spanish') {
        var spanish = ['La Bodega Vasca', 'Rosa de Triana', 'Rincón Iberico', 'Bodegas de Compostela & Tapas', 'El Mesón Gallego'];
        var rand_spanish = spanish[Math.floor(Math.random() * spanish.length)];
        text.value = rand_spanish;


    }
    if (foodType == 'french') {
        var french = ['Crepe Maker', 'Tradición Francesa', 'Bistro de París', 'La Boulangerie', 'Trois Cent Onze', 'Pomme de Terre'];
        var rand_french = french[Math.floor(Math.random() * french.length)];
        text.value = rand_french;


    }
    if (foodType == 'bars') {
        var bars = ['La Factoria', 'La Taberna Lúpulo', 'El Tap', '100 X 35 Beer Boutique', 'Caneca', 'Ocean Lab Brewing Co.'];
        var rand_bars = bars[Math.floor(Math.random() * bars.length)];
        text.value = rand_bars;


    }
    if (foodType == 'veggies') {
        var veggies = ['Verde Mesa', 'Garden of Health', 'Ponte Fresco', 'Bori Vegan', 'Veggie Garden', 'Baoricua'];
        var rand_veggies = veggies[Math.floor(Math.random() * veggies.length)];
        text.value = rand_veggies;


    }
    if (foodType == 'pizza') {
        var pizza = ['Dorotea\'s Pizza', 'Pirilo Pizza Rústica', 'Mona Lisa', 'Farinole', 'Via Appia Wine Bar and Grill', 'La Tortugo Pizzería & Panadería', 'Loiza 2050',
            'Pizzeria Puerto Madero', 'El Conde', 'Pizzería Pimentón & Birreria', 'Pizza e Birra', 'Puttanesca Trattoria', 'Piola Pizzería Artesanal',];
        var rand_pizza = pizza[Math.floor(Math.random() * pizza.length)];
        text.value = rand_pizza;


    }
    if (foodType == 'brunch') {
        var brunch = ['Abracadabra', 'Sabrina', 'Musa', '6.21 Cocina Libre', 'Chocobar Cortés', 'Musa', 'Waffle-era Tea Room', 'Café Marquesa', 'Bistro Café', 'Pinky\'s', 'Buen Vecino Café', 'Mrs.Potts Bake Shop & Bistro'];
        var rand_brunch = brunch[Math.floor(Math.random() * brunch.length)];
        text.value = rand_brunch;


    }
    if (foodType == 'fancy') {
        var fancy = ['1919', 'Santaella', 'Mario Pagán', 'Niche Bistro', 'Marmalade', 'Trois Cent Onze', 'Ariel'];
        var rand_fancy = fancy[Math.floor(Math.random() * fancy.length)];
        text.value = rand_fancy;


    }
    if (foodType == 'burgersDogsFries') {
        var burgersDogsFries = ['Burger & Beer Joint', 'Blue Burger', 'Buns Burger Shop', 'Airbuns Burgers', 'El Joint Burger', 'The Place at Condado', 'El Hamburger', 'La Burguett', 'Prros Locos', ''];
        var rand_burgersDogsFries = burgersDogsFries[Math.floor(Math.random() * burgersDogsFries.length)];
        text.value = rand_burgersDogsFries;


    }
}