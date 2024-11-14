document.addEventListener("DOMContentLoaded", function() {

    function playSound() {
        const audio = new Audio('sounds/brilho.mp3'); 
        audio.play();
    }

    
    const princessImages = document.querySelectorAll('.princesa-img');

    princessImages.forEach(image => {
        image.addEventListener('mouseenter', playSound); 
    });
});
