function getDoener(category) {
    const doe = document.getElementById("doener");
    doe.innerHTML = `
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

function getTurkish(category) {
    const turkish = document.getElementById("turkish");
    turkish.innerHTML = `
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

function getBurger(category) {
    const burger = document.getElementById("burger");
    burger.innerHTML = `
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

function getChicken(category) {
    const chicken = document.getElementById("chicken");
    chicken.innerHTML = `
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

function getWurst(category) {
    const wurst = document.getElementById("wurst");
    wurst.innerHTML = `
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

function getSchnitzel(category) {
    const schnitzel = document.getElementById("schnitzel");
    schnitzel.innerHTML = `
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

function getBeefImages(image) {
    return `
        <img
            class="cardImg"
            src="../assets/img/beefSection/${image.image}.png"
            alt="${image.image}"
        >
    `;
}