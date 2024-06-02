let currBet = document.querySelector('#currBet');
let temp = 10;
let org = temp;
let inp = document.querySelector('#inp');

inp.addEventListener('input', () => { // Changed 'change' to 'input' for real-time update
    currBet.innerHTML = inp.value;
    temp = inp.value;
    org = temp;
});

let val = 1.05;
let mul = document.querySelector('#mul');

function reset() {
    let allBoxes = document.querySelectorAll('.diamond-box');
    allBoxes.forEach(box => {
        box.style.backgroundColor = 'black';
    });
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('diamond-box')) {
        e.target.style.backgroundColor = 'white';

        if (e.target.innerHTML == 'Diamond') {
            currBet.innerHTML = (temp * val).toFixed(3);
            temp *= val;
            val *= 1.005;

            mul.innerHTML = (temp / org).toFixed(3);
        } else {
            setTimeout(() => {
                reset();
            }, 200);

            mul.innerHTML = 1;
            currBet.innerHTML = '10';
            val = 1.05;
            temp = 10;
            alert('You Lose');
        }
    }
});
