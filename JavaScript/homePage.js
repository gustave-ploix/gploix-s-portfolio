const container = document.getElementsByClassName("container")[0];
const nameCard = document.getElementsByClassName("name-card")[0];
const text = document.getElementsByClassName("text");
const btn = document.getElementById("btn");

function loadingPage() {
    nameCard.classList.add("open");

    for (let i = 0; i < text.length; i++) {
        text[i].classList.add("visible");
    };

    setTimeout(() => {
        btn.classList.add("done")
    }, 2500);
};

window.addEventListener("load", loadingPage());
btn.addEventListener("click", () => {
    container.classList.toggle("to-the-left");
    setTimeout(() => {
        window.location.href = "../secondPage.html";
    }, 600);
});

