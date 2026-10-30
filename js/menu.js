const menu = {
    pizza: {
        title: "Pizza",
        sizes: ["24 cm", "30 cm"],
        items: [
            {name: "P1 Margherita", prices: ["7,00€", "8,50€"]},
            {name: "P2 Salami", prices: ["8,50€", "10,00€"]},
            {name: "P3 Funghi", prices: ["8,50€", "10,00€"]},
            {name: "P4 Cipolla", prices: ["8,50€", "10,00€"]},
            {name: "P5 Quattro Stagioni", prices: ["9,50€", "11,00€"]},
            {name: "P6 Tonno", prices: ["9,50€", "11,00€"]},
            {name: "P7 Puglese", prices: ["9,50€", "11,00€"]},
            {name: "P8 Sardellen", prices: ["8,50€", "10,00€"]},
            {name: "P9 Gamberetti", prices: ["10,50€", "12,00€"]},
            {name: "P10 Frutti di Mare", prices: ["11,00€", "12,00€"]},
            {name: "P11 Rotat", prices: ["11,00€", "12,00€"]},
            {name: "P12 Vulkano", prices: ["11,00€", "12,00€"]},
            {name: "P13 Hawaii", prices: ["9,50€", "11,00€"]},
            {name: "P14 Bombay", prices: ["11,00€", "12,00€"]},
            {name: "P15 Spinaci", prices: ["9,50€", "11,00€"]},
            {name: "P16 Broccoli", prices: ["9,50€", "11,00€"]},
            {name: "P17 Paprika", prices: ["9,50€", "11,00€"]},
            {name: "P18 Vegetaria", prices: ["9,50€", "11,00€"]},
            {name: "P19 Italia", prices: ["11,00€", "12,00€"]},
            {name: "P20 Döner", prices: ["11,00€", "12,00€"]},
            {name: "P21 Sucuk", prices: ["11,00€", "12,00€"]},
            {name: "P22 Bodrum", prices: ["11,00€", "12,00€"]},
            {name: "P23 Chef", prices: ["11,00€", "12,00€"]},
            {name: "P24 Bolognese", prices: ["11,00€", "12,00€"]},
            {name: "P25 Calzone", prices: ["","12,00€"]}
        ]
    },
    pizzabroetchen: {
        title: "Pizzabrötchen",
        sizes: ["8 Stück"],
        items: [
            {name: "Käse", prices: ["4,00€", "22,00€"]},
            {name: "Salami", prices: ["4,50€", "24,00€"]},
            {name: "Schinken", prices: ["4,50€", "24,00€"]},
            {name: "Thunfisch", prices: ["5,00€", "26,00€"]},
            {name: "Vegetarisch", prices: ["4,50€", "24,00€"]}
        ]
    },
    pizzastange: {
        title: "Pizzastange",
        sizes: ["8 Stück"],
        items: [
            {name: "Pizzastange", prices: ["8,50€"]},
        ]
    },
    ueberbackene: {
        title: "Überbackene",
        items: [
            {name: "Lasagne", prices: ["10,50€"]},
            {name: "Makkaroni", prices: ["11,80€"]},
            {name: "Spaghetti", prices: ["11,80€"]},
            {name: "Reis", prices: ["10,00€"]},
            {name: "Makkaroni mit Dönerfleisch", prices: ["11,80€"]},
            {name: "Spaghetti mit Dönerfleisch", prices: ["11,80€"]},
            {name: "Dönerfleisch", prices: ["12,80€"]},
        ]
    },
      doener: {
    title: "Yaprak Döner Gerichte",
    items: [
      { name: "Dönertasche mit hausgemachten Fladenbrot", prices: ["8,20€"] },
      { name: "Jumbo Döner mit hausgemachten Fladenbrot", prices: ["14,00€"] },
      { name: "Portion Dönerfleisch", prices: ["11,00€"] },
      { name: "Döner Teller", prices: ["14,00€"] },
      { name: "Iskender", prices: ["14,00€"] },
      { name: "Dürüm mit hausgemachten Wrap", prices: ["9,50€"] },
      { name: "Pomm Döner", prices: ["9,50€"] }
    ]
    },
    tuerkisch: {
        title: "Türkische Spezialitäten",
        items: [
        { name: "Lahmacun (hausgemacht) mit Salat", prices: ["7,50€"] },
        { name: "Lahmacun (hausgemacht) mit Dönerfleisch und Salat", prices: ["9,50€"] },
        { name: "Sucuk Tasche mit hausgemachten Fladenbrot", prices: ["9,50€"] },
        { name: "Sucuk Dürüm mit hausgemachten Wrap", prices: ["10,00€"] },
        { name: "Köftetasche mit hausgemachten Fladenbrot", prices: ["8,50€"] },
        { name: "Köfte Dürüm mit hausgemachten Wrap", prices: ["9,50€"] },
        { name: "Köfteteller mit zwei Beilagen", prices: ["13,50€"] }
        ]
    },
    imbiss: {
        title: "Imbiss Gerichte",
        items: [
        { name: "Pommes klein", prices: ["3,40€"] },
        { name: "Pommes groß", prices: ["4,40€"] },
        { name: "Kroketten", prices: ["4,00€"] },
        { name: "Bratwurst Klassik", prices: ["3,40€"] },
        { name: "Currywurst", prices: ["4,00€"] },
        { name: "Jägerwurst", prices: ["4,00€"] },
        { name: "Bratwurst in Ungarische Art", prices: ["4,00€"] },
        { name: "Schnitzel", prices: ["8,00€"] },
        { name: "Jägerschnitzel", prices: ["9,00€"] },
        { name: "Schnitzel in Ungarische Art", prices: ["9,00€"] },
        { name: "Hamburger hausgemachtes Petty 100g", prices: ["6,00€"] },
        { name: "Cheeseburger hausgemachtes Petty 100g", prices: ["6,50€"] },
        { name: "Chickenburger", prices: ["6,00€"] },
        { name: "Chicken Nuggets 6er / 9er", prices: ["5,50€", "6,50€"] },
        { name: "Chicken Wings (hausgemacht) 6er", prices: ["8,00€"] },
        { name: "Bambi Scheibe", prices: ["3,00€"] }
        ]
    },
    vegetarisch: {
        title: "Vegetarische Gerichte",
        items: [
        { name: "Falafel Tasche(hausgemacht)", prices: ["8,20€"] },
        { name: "Falafel Teller", prices: ["14,00€"] },
        { name: "Falafel Dürüm", prices: ["9,50€"] },
        { name: "Salattasche", prices: ["7,50€"] },
        { name: "Salat Dürüm", prices: ["7,50€"] },
        { name: "Pommes Tasche", prices: ["8,00€"] }
        ]
    },
    salate: {
        title: "Salate",
        items: [
        { name: "Bauernsalat", prices: ["6,50€"] },
        { name: "Hirtensalat", prices: ["7,50€"] },
        { name: "Krautsalat", prices: ["4,50€"] }
        ]
    },
    saucen: {
        title: "SAUCEN",
        items: [
        { name: "Mayonnaise", prices: ["0,60€"] },
        { name: "Ketchup", prices: ["0,60€"] },
        { name: "Tzatziki", prices: ["2,00€"] },
        { name: "Joppie Souce", prices: ["2,00€"] },
        { name: "Jägersouce", prices: ["2,00€"] },
        { name: "Sauce nach ungarischer Art", prices: ["2,00€"] },
        { name: "Sauce Hollandaise", prices: ["2,00€"] }
        ]
    },
    getraenke: {
        title: "SOFTDRINKS AND BEER",
        items: [
        { name: "0,33l Softdrink", prices: ["2,50€"] },
        { name: "0,33l Beer", prices: ["3,00€"] },
        { name: "0,50l Softdrink", prices: ["3,00€"] },
        { name: "1,00l Softdrink", prices: ["3,50€"] },
        { name: "0,25l Ayran", prices: ["2,20€"] }
        ]
    }
 }