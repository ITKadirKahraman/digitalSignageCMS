function init() {
    renderScreen1();
}

function renderScreen1() {
    getPizza(menu.pizza);
    getPizzabroetchen(menu.pizzabroetchen);
    getPizzastange(menu.pizzastange);
    getUeberbackene(menu.ueberbackene);
    renderPizzaSectionImages();
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