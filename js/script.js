function init() {
    renderScreen1();
}

function init2() {
    renderScreen2();
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
    getDrinks(menu.getraenke);
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

function renderOtherSectionImages() {
    let container = document.getElementById("otherImages");
    let content = `<section class="otherImages">`;
    for (let imagesIndex = 0; imagesIndex < images.otherSection.length; imagesIndex++) {
        content += getOtherImages(images.otherSection[imagesIndex]);
    }
    content += `</section>`;
    container.innerHTML = content;
}