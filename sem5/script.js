document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");

    // Criando container principal
    const container = document.createElement("div");
    container.className = "container";

    // Criando título
    const title = document.createElement("h2");
    title.innerText = "Total";

    // Criando contador total
    const totalDisplay = document.createElement("input");
    totalDisplay.type = "text";
    totalDisplay.value = "0";
    totalDisplay.disabled = true;
    totalDisplay.className = "total";

    // Criando botão de reset
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "🔄";
    resetButton.className = "reset";
    resetButton.addEventListener("click", resetCounts);

    // Criando div de contadores individuais
    const counterDiv = document.createElement("div");
    counterDiv.className = "counter";

    // Criando grupos de contadores
    const menGroup = createCounterGroup("Homens");
    const womenGroup = createCounterGroup("Mulheres");

    counterDiv.appendChild(menGroup);
    counterDiv.appendChild(womenGroup);

    // Adicionando elementos ao container principal
    container.appendChild(title);
    container.appendChild(totalDisplay);
    container.appendChild(resetButton);
    container.appendChild(counterDiv);

    // Adicionando container ao app
    app.appendChild(container);

    function createCounterGroup(label) {
        const group = document.createElement("div");
        group.className = "group";

        const img = document.createElement("img");
        img.src = label === "Homens" ? "https://cdn-icons-png.flaticon.com/128/236/236831.png" : "https://i.postimg.cc/9MHL2BJD/woman.png";
        img.width = 50;

        const minusButton = document.createElement("button");
        minusButton.innerText = "-";
        minusButton.addEventListener("click", () => updateCount(label, -1));

        const plusButton = document.createElement("button");
        plusButton.innerText = "+";
        plusButton.addEventListener("click", () => updateCount(label, 1));

        const labelElement = document.createElement("p");
        labelElement.innerText = label;

        const countDisplay = document.createElement("input");
        countDisplay.type = "text";
        countDisplay.value = "0";
        countDisplay.disabled = true;
        countDisplay.className = label.toLowerCase();

        group.appendChild(img);
        group.appendChild(minusButton);
        group.appendChild(plusButton);
        group.appendChild(labelElement);
        group.appendChild(countDisplay);

        return group;
    }

    function updateCount(label, value) {
        const countDisplay = document.querySelector("." + label.toLowerCase());
        let count = parseInt(countDisplay.value) + value;
        if (count < 0) count = 0;
        countDisplay.value = count;

        updateTotal();
    }

    function updateTotal() {
        const menCount = parseInt(document.querySelector(".homens").value);
        const womenCount = parseInt(document.querySelector(".mulheres").value);
        totalDisplay.value = menCount + womenCount;
    }

    function resetCounts() {
        document.querySelector(".homens").value = "0";
        document.querySelector(".mulheres").value = "0";
        totalDisplay.value = "0";
    }
});