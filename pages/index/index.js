function incrementWithLimit({ value, min, max }) {
    if (value === max) return min
    else return value + 1;
}

let indexOfLastSimpleSlide = 0;

function simpleSlider() {
    const indexOfCurrentSimpleSlide = incrementWithLimit({ value: indexOfLastSimpleSlide, min: 0, max: 2 });
    const allSlides = document.querySelectorAll('.simple-slider__item');

    allSlides.forEach((slide, index) => {
        if (index === indexOfLastSimpleSlide) {
            slide.classList.remove('d-block');
            slide.classList.add('d-none');

        } else if (index === indexOfCurrentSimpleSlide) {
            slide.classList.remove('d-none');
            slide.classList.add('d-block');
        }
    });

    indexOfLastSimpleSlide = indexOfCurrentSimpleSlide;
}


let serviceTranslateValue;
let serviceTranslateCurrent = 0;
let servicePages = 3;
let serviceCurrentPage = 1;
setService();
globalThis.addEventListener('resize', setService);
function setService() {

    let pageWidth = globalThis.innerWidth;

    if (pageWidth > 1600) {
        serviceTranslateValue = (334 + 30) * 4;
        servicePages = 3;
    }
    else if (1400 < pageWidth && pageWidth <= 1600) {
        serviceTranslateValue = (269 + 30) * 4;
        servicePages = 3;
    }
    else if (1200 < pageWidth && pageWidth <= 1400) {
        serviceTranslateValue = (224 + 30) * 4;
        servicePages = 3;
    }
    else if (992 < pageWidth && pageWidth <= 1200) {
        serviceTranslateValue = (389 + 30) * 2;
        servicePages = 6;
    }
    else if (768 < pageWidth && pageWidth <= 992) {
        serviceTranslateValue = (270 + 30) * 2;
        servicePages = 6;
    }
    else if (pageWidth <= 768) {
        serviceTranslateValue = (395 + 30) * 1;
        servicePages = 12;
    }

    swipeService(true);
}


function swipeService(reset, side) {
    let root = document.getElementsByClassName('complex-slider__content')[0];

    if (side === 'right') {
        if (servicePages === serviceCurrentPage) {
            serviceTranslateCurrent = 0;
            serviceCurrentPage = 1;
        } else {
            serviceTranslateCurrent -= serviceTranslateValue;
            serviceCurrentPage += 1;
        };
    } else if (side === 'left') {
        if (serviceCurrentPage === 1) {
            serviceTranslateCurrent = serviceTranslateValue * (servicePages - 1) * (-1);
            serviceCurrentPage = servicePages;
        } else {
            serviceTranslateCurrent += serviceTranslateValue;
            serviceCurrentPage -= 1;
        }
    }

    if (reset) serviceTranslateCurrent = 0;
    root.setAttribute('style', `transform: translateX(${serviceTranslateCurrent}px)`);
}