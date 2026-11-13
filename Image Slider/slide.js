const proimg = document.querySelectorAll('.proimg img');
const prevSlide = document.getElementById('prevslide');
const nextSlide = document.getElementById('nextslide');

let slideIndex = 0;
let intervalID = null;

document.addEventListener('DOMContentLoaded', initialSlide)

function initialSlide(){

    if (proimg.length > 0) {
        proimg[slideIndex].classList.add('show')
        intervalID = setInterval(next, 3000);
    }
}

function viewSlide(index) {

    if (index >= proimg.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = proimg.length - 1;
    }

    proimg.forEach(img => {
        img.classList.remove('show')
    });

    proimg[slideIndex].classList.add('show');

}

function prev() {
    clearInterval(intervalID)
    slideIndex--;
    viewSlide(slideIndex);
}


function next() {
    slideIndex++;
    viewSlide(slideIndex);
    // clearInterval(intervalID)
}


nextSlide.addEventListener('click', next)
prevSlide.addEventListener('click', prev)