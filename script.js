document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('meme-img');
    const sound = document.getElementById('sound');
    const newImgSrc = 'img/siu.jpeg';  

    img.addEventListener('click', function() {
        // Ajoute la classe pour l'animation
        img.classList.add('spin');

        // Change l'image après l'animation
        setTimeout(function() {
            img.src = newImgSrc;
            // Joue le son après le changement d'image
            sound.play();

            // Recharger la page 3 secondes après le changement d'image et la lecture du son
            setTimeout(function() {
                location.reload();
            }, 3000); // 3 secondes avant de recharger la page

            // Retire la classe d'animation pour permettre de cliquer à nouveau
            img.classList.remove('spin');
        }, 2000);  // 2 secondes pour l'animation
    });
});
