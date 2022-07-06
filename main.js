const select = document.getElementById('operation');
const firstNum = document.getElementById('firstNumber');
const secondNum = document.getElementById('secondNumber');
const resultBtn = document.getElementById('calculate');
const answer = document.getElementById('answer');

function findGCD (a, b) {
    const num = a > b ? b : a;

    for (let i = num; i > 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
    return 1;
}

function findLCM (a, b) {
   const mult = a * b;
   const gcd = findGCD (a, b);
   const result = mult / gcd;

   return result;
}

resultBtn.addEventListener('click', () => {
    const a = firstNum.value;
    const b = secondNum.value;

    if (a === '' && b === '') {
        answer.innerHTML = 'Please enter values';
        return;
    }
    if (select.value === 'GCD') {
        const result = findGCD (+a, +b);
        answer.innerHTML = 'Answer   ' + result;

    } else if (select.value === 'LCM') {
        const result = findLCM (+a, +b);
        answer.innerHTML = 'Answer   ' + result;
    } else {
         answer.innerHTML = 'Please select an operation';
    }
})