function renderCategory(category) {
    const app = document.getElementById("app");
    return app.innerHTML = `
        <h1>${category.title}</h1>
        <ul>
            ${category.items.map(item => `
                <li>
                    ${item.name} - ${item.prices.join(", ")}
                </li>
            `).join("")}
        </ul>
    `;
}