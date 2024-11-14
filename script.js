// Script para navegação entre os itens
document.getElementById("next-btn").addEventListener("click", function() {
    document.querySelector(".timeline-wrapper").scrollBy({ left: 320, behavior: "smooth" });
});

document.getElementById("prev-btn").addEventListener("click", function() {
    document.querySelector(".timeline-wrapper").scrollBy({ left: -320, behavior: "smooth" });
});
