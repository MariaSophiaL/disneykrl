document.addEventListener("DOMContentLoaded", function() {

    // Função para alternar a visibilidade dos vídeos
    function toggleVideo(videoId) {
        const videoElement = document.getElementById(videoId);
        
        // Verificar se o vídeo está escondido ou visível
        if (videoElement.style.display === "none" || videoElement.style.display === "") {
            videoElement.style.display = "block";
            // Adicionar a classe para animação
            videoElement.classList.add("show");
        } else {
            videoElement.style.display = "none";
            // Remover a classe para animação
            videoElement.classList.remove("show");
        }
    }

    // Adiciona evento de clique aos botões para abrir os vídeos
    const videoBtns = document.querySelectorAll(".video-btn");
    videoBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const videoId = this.getAttribute("onclick").match(/'(.*?)'/)[1];
            toggleVideo(videoId);
        });
    });

});
