function init() {
    bye();
}

function bye() {
    const msg = document.querySelector("h2");

    document.addEventListener("click", function () {
        msg.style.color = "blue";
        msg.textContent = "Goodbye World";
    });
}

init();
