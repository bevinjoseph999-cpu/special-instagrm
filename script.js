const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposal = document.getElementById("proposal");
const yesScreen = document.getElementById("yesScreen");
const heartsContainer = document.querySelector(".hearts");

yesBtn.addEventListener("click", () => {
    proposal.classList.add("hidden");
    yesScreen.classList.remove("hidden");
    createHearts();
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 300);
}