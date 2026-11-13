const displayBtn = document.getElementById('displayBtn');
const nextBtn = document.getElementById('nextBtn');
const input = document.querySelector('input');
const review = document.querySelector('.displaycontent');

let numChars = '';

review.addEventListener('click', (event) => {
    if (event.target === review) {
        review.style.visibility = 'hidden';
        input.value = '';
    }
});


function inputVal() {
    const randomNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const length = Number(input.value);

    numChars = '';

    for (let i = 0; i < length; i++) {
        const randomNumChars = Math.floor(Math.random() * randomNum.length);
        numChars += randomNum[randomNumChars];

        if ((i + 1) % 3 === 0 && i !== length - 1) {
            numChars += '-';
        }
    }

    console.log(numChars);
    display();

}

function display() {
    review.style.visibility = 'visible';

    const displayValue = document.querySelector('p');
    displayValue.textContent = numChars;


}

function nextTime() {
    inputVal();
}

displayBtn.addEventListener('click', inputVal);
nextBtn.addEventListener('click', nextTime);