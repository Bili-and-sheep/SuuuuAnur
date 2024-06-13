document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('meme-img');
    const transitionSound = document.getElementById('transition-sound');
    const sound = document.getElementById('sound');
    const newImgSrc = 'img/siu.jpeg';  

    img.addEventListener('click', function() {
        img.classList.add('spin');

        transitionSound.play();

        setTimeout(function() {
            img.src = newImgSrc;
            sound.play();

            setTimeout(function() {
                location.reload();
            }, 1400); 


            img.classList.remove('spin');
        }, 1800); 
    });
});
