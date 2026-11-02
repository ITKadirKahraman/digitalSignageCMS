function getFalafel(category) {
    const falafel = document.getElementById("falafel");
    falafel.innerHTML = `
        <section class="otherCategory">
            <div class="header">
                <h1 class="category__title">${category.title}</h1>
            </div>
            <ul class="category__items">
                ${category.items.map(item => `
                    <li class="category__item">
                        <span>${item.name}</span>
                        <div class="category__item__prices">
                            <span>${item.prices[0]}</span>
                        </div>
                    </li>
                `).join("")}
            </ul>
        </section>
    `;
}

function getVegetarisch(category) {
    const vegetarisch = document.getElementById("vegetarisch");
    vegetarisch.innerHTML = `
        <section class="otherCategory">
            <div class="header">
                <h1 class="category__title">${category.title}</h1>
            </div>
            <ul class="category__items">
                ${category.items.map(item => `
                    <li class="category__item">
                        <span>${item.name}</span>
                        <div class="category__item__prices">
                            <span>${item.prices[0]}</span>
                        </div>
                    </li>
                `).join("")}
            </ul>
        </section>
    `;
}

function getSalate(category) {
    const salate = document.getElementById("salate");
    salate.innerHTML = `
        <section class="otherCategory">
            <div class="header">
                <h1 class="category__title">${category.title}</h1>
            </div>
            <ul class="category__items">
                ${category.items.map(item => `
                    <li class="category__item">
                        <span>${item.name}</span>
                        <div class="category__item__prices">
                            <span>${item.prices[0]}</span>
                        </div>
                    </li>
                `).join("")}
            </ul>
        </section>
    `;
}

function getSaucen(category) {
    const saucen = document.getElementById("saucen");
    saucen.innerHTML = `
        <section class="otherCategory">
            <div class="header">
                <h1 class="category__title">${category.title}</h1>
            </div>
            <ul class="category__items">
                ${category.items.map(item => `
                    <li class="category__item">
                        <span>${item.name}</span>
                        <div class="category__item__prices">
                            <span>${item.prices[0]}</span>
                        </div>
                    </li>
                `).join("")}
            </ul>
        </section>
    `;
}

function getDrinks(category) {
    const drinks = document.getElementById("drinks");
    drinks.innerHTML = `
        <section class="otherCategory">
            <div class="header">
                <h1 class="category__title">${category.title}</h1>
            </div>
            <ul class="category__items">
                ${category.items.map(item => `
                    <li class="category__item">
                        <span>${item.name}</span>
                        <div class="category__item__prices">
                            <span>${item.prices[0]}</span>
                        </div>
                    </li>
                `).join("")}
            </ul>
        </section>
    `;
}

function getOtherImages(image) {
    return `
        <img
            class="cardImg"
            src="../assets/img/otherSection/${image.image}.png"
            alt="${image.image}"
        >
    `;
}