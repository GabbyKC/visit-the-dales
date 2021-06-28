// Header Modal
let modal = document.getElementById("headerModal");
let btn = document.getElementById("modalButton");
let span = document.getElementsByClassName("header__modal__close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Section Three Carousel using Slick
$('.section-three__carousel').slick({
    slidesToShow: 4,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        },
    ]
});