function renderPizza(category) {
    const pizza = document.getElementById("pizza");

    pizza.innerHTML = `
        <section class="pizzaCategory">
            <div class="header">
                <h1 class="category__title">${category.title}</h1>
                <div class="header__sizes">
                    <h2 class="category__sizes24">${category.sizes[0]}</h2>
                    <h2 class="category__sizes30">${category.sizes[1]}</h2>
                </div>
            </div>
            <ul class="category__items">
                ${category.items.map(item => `
                    <li class="category__item">
                        <span>${item.name}</span>
                        <div class="category__item__prices">
                            <span>${item.prices[0]}</span>
                            <span>${item.prices[1]}</span>
                        </div>
                    </li>
                `).join("")}
            </ul>
        </section>
    `;
}

function renderPizzabroetchen(category) {
    const pizzabroetchen = document.getElementById("pizzabroetchen")
}