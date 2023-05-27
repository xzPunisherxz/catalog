const showOnPx = 100;
const backToTopButton = document.querySelector('.back-to-top');

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener('scroll', () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove('hidden')
    } else {
        backToTopButton.classList.add('hidden')
    }
})

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: 'smooth'
    })
}

backToTopButton.addEventListener('click', goToTop);

const modalWindow = document.querySelector('.container__form');

document.body.addEventListener('click', e => {
    if(e.target.classList.contains('btn__card__add')) {
        modalWindow.classList.add('form-active');
    }
})

const btnCloseForm = document.querySelector('.btn-close');

btnCloseForm.addEventListener('click', () => {
    modalWindow.classList.remove('form-active');
})
const btnBuy = document.querySelector('.btn-buy');

btnBuy.addEventListener('click', () => {
    alert('Покупка прошла успешно!')
})

let comments  = document.getElementById('comment');
let result = document.querySelector('.result');
let limit = 2000;

result.textContent = 0 + "/" + limit;

comments.addEventListener('input', () => {
    let textLength = comments.value.length;

    result.textContent = textLength + "/" + limit;
    if(textLength > limit) {
        comments.style.borderColor = '#ff2851';
        result.style.color = '#ff2851';
    } else {
        comments.style.borderColor = '#31821b';
        result.style.color = '#31821b';
    }

});

const btnTheme = document.querySelector('.btn-theme');
const page = document.querySelector('.body');
const navMenu = document.querySelector('.header-navigation');
const card = document.querySelectorAll('.card');
const footer = document.querySelector('.footer-navigation');
const btnAll = document.querySelectorAll('.btn');
const btnAddCard = document.querySelectorAll('.btn__card__add');
const category = document.querySelectorAll('h2');

btnTheme.addEventListener('click', () => {
page.classList.toggle('body-dark');
navMenu.classList.toggle('header-navigation-dark');
card.forEach(elem => elem.classList.toggle('card-dark'));
footer.classList.toggle('footer-dark');
btnAll.forEach(elem => elem.classList.toggle('btn-dark'));
btnAddCard.forEach(elem => elem.classList.toggle('btn__card__add-dark'));
category.forEach(elem => elem.classList.toggle('h2-dark'));
})