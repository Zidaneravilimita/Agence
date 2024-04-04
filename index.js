document.addEventListener('DOMContentLoaded', function() {
    const btnFermer = document.querySelector('.btn-fermer-slider');
    const btnOuvrir = document.querySelector('.vr_pls1');
    const fenetreImage = document.querySelector('.agrandirImg1');
    const imgSlider = document.querySelector('.ImgSlider');
    const prevBtn = document.querySelector('.prev1');
    const nextBtn = document.querySelector('.next1');

    let currentPosition = 0;
    const images = document.querySelectorAll('.ImgSlider img');
    const totalImages = images.length;
   

    btnFermer.addEventListener('click', function() {
        fenetreImage.style.display = 'none';
    });

    btnOuvrir.addEventListener('click', function() {
        fenetreImage.style.display = 'block';
    });

    prevBtn.addEventListener('click', slideLeft);
    nextBtn.addEventListener('click', slideRight);

    // Fonction pour déplacer le slider vers la gauche
    function slideLeft() {
        currentPosition -= 1;
        if (currentPosition < 0) {
            currentPosition = totalImages - 1;
        }
        imgSlider.style.transform = `translateX(-${currentPosition * 15}rem)`;
    }

    // Fonction pour déplacer le slider vers la droite
    function slideRight() {
        currentPosition += 1;
        if (currentPosition >= totalImages) {
            currentPosition = 0;
        }
        imgSlider.style.transform = `translateX(${currentPosition * 15}rem)`;
    }
});
