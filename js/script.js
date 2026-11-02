function init() {
    renderScreen1();
}

function init2() {
    renderScreen2();
}

function init3() {
    renderScreen3();
}

function renderScreen1() {
    getPizza(menu.pizza);
    getPizzabroetchen(menu.pizzabroetchen);
    getPizzastange(menu.pizzastange);
    getUeberbackene(menu.ueberbackene);
    renderPizzaSectionImages();
}

function renderScreen2() {
    getDoener(menu.doener);
    getTurkish(menu.tuerkisch);
    getBurger(menu.burger);
    getChicken(menu.chicken);
    getWurst(menu.wurst);
    getSchnitzel(menu.schnitzel);
    renderBeefSectionImages();
}

function renderScreen3() {
    getFalafel(menu.falafel);
    getVegetarisch(menu.vegetarisch);
    getSalate(menu.salate);
    getDrinks(menu.getraenke);
    getSaucen(menu.saucen);
    renderOtherSectionImages();
}

function renderPizzaSectionImages() {
    let container = document.getElementById("images");
    let content = `<section class="pizzaImages">`;
    for (let imagesIndex = 0; imagesIndex < images.pizzaSection.length; imagesIndex++) {
        content += getPizzaImages(images.pizzaSection[imagesIndex]);
    }
    content += `</section>`;
    container.innerHTML = content;
}

function renderBeefSectionImages() {
    let container = document.getElementById("beefImages");
    let content = `<section class="otherImages">`;
    for (let imagesIndex = 0; imagesIndex < images.beefSection.length; imagesIndex++) {
        content += getBeefImages(images.beefSection[imagesIndex]);
    }
    content += `</section>`;
    container.innerHTML = content;
}

function renderOtherSectionImages() {
    let container = document.getElementById("otherImages");
    let content = `<section class="otherImages">`;
    for (let imagesIndex = 0; imagesIndex < images.otherSection.length; imagesIndex++) {
        content += getOtherImages(images.otherSection[imagesIndex]);
    }
    content += `</section>`;
    container.innerHTML = content;
}