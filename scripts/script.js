"use script";

const inputs = document.querySelectorAll("input");
const form = document.querySelector('.form');
const formSub = document.querySelectorAll('.form__sub');
const button = document.querySelector('button');
const resultHeading = document.querySelector('.result-heading');
const image = document.querySelector('.form__img');
const text = document.querySelector('.pre-result--text');
const resultDefault = document.querySelector('.form__result--hidden');
const resultTab = document.querySelector('.form__result--tab');
const resultText = document.querySelector('.form__result');
const resultSubText = document.querySelector('.form__result--sub');
const resetLink = document.querySelector('.form__link');
const radioButtons = document.querySelectorAll('.form__input--radio');

const mortgageCalculator = function (amount, term, interest) {
    return (amount * interest * (1 + interest) ** term) / (((1 + interest) ** term) - 1)
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let amount = inputs[0].value;
    let term = inputs[1].value;
    let rate = inputs[2].value;
    const monthlyPay = mortgageCalculator(amount, term, rate).toPrecision(2);
    const termPay = (monthlyPay * term * 12).toPrecision(2);
    console.log(monthlyPay, termPay);

    const formatMonthlyPay = new Intl.NumberFormat("en-US").format(monthlyPay);
    const formatTermPay = new Intl.NumberFormat("en-US").format(termPay);

    resultText.textContent = `\u20AC${formatMonthlyPay}`
    resultSubText.textContent = `\u20AC${formatTermPay}`

    // resultHeading.textContent = 'Your results'

    image.classList.add('hidden');
    resultDefault.classList.add('hidden');
    resultTab.classList.remove('hidden')

    // text.textContent = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.'
})

resetLink.addEventListener('click', () => {
    form.reset();

    resultDefault.classList.remove('hidden')
    resultTab.classList.add('hidden')
    image.classList.remove('hidden');
})