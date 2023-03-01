let sayac = 0;
const back = document.querySelector('.back');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
const max = document.querySelectorAll('.slide').length - 1;
next.addEventListener('click', () => {
    if (sayac < max) {
        sayac++;
        slider.style.left = '-' + 800 * sayac + 'px';
    }
    else {
        sayac = 0;
        slider.style.left = '-' + 800 * sayac + 'px';
    }
})

back.addEventListener('click', () => {
    if (sayac >= 0) {
        sayac--;
        slider.style.left = '-' + 800 * sayac + 'px';
    }

})