document.addEventListener('DOMContentLoaded', () => {
    const boutons = document.querySelectorAll('.button');
    const Contenu = document.querySelectorAll('.content');

    boutons.forEach(bouton => {
        bouton.addEventListener('click', () => {
            const numeroboutton = bouton.getAttribute('numero');
            Contenu.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(`content-${numeroboutton}`).classList.add('active');
        });
    });
});
