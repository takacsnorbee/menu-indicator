document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.menu-element');

    function setPosition() {
        elements.forEach( e => {
            e.classList.remove('active');
            this.classList.add('active');
        })
    }

    elements.forEach( e => {
        e.addEventListener('click', setPosition);
    })
});