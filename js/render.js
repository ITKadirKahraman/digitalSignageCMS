function renderPizza(category) {
    const app = document.getElementById("category");

    app.innerHTML = `
        <section class="category">
            <h1 class="category__title">${category.title}</h1>
            <ul class="category__items">
                ${category.items.map(item => `
                    <li class="category__item">
                        <span>${item.name}</span>
                        <span>${item.prices.join(", ")}</span>
                    </li>
                `).join("")}
            </ul>
        </section>
    `;
}