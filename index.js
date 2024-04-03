document.addEventListener('DOMContentLoaded', function() {
    const btnFermer = document.querySelector('.btn-fermer-slider');
    const btnOuvrir = document.querySelector('.vr_pls1');
   /* const btnOuvrir_2 = document.querySelector('.vr_pls2');*/
    const fenetreImage = document.querySelector('.agrandirImg1');
    /*const fenetreImage2 = document.querySelector('.agrandirImg2');*/

    btnFermer.addEventListener('click', function() {
        fenetreImage.style.display = 'none';
    });

    btnOuvrir.addEventListener('click', function() {
        fenetreImage.style.display = 'block'; // Réaffichage de la fenêtre
    });

    /*Vr pl 2*/
   /* btnOuvrir_2.addEventListener('click', function() {
        fenetreImage2.style.display = 'block'; // Réaffichage de la fenêtre
    });*/
});
