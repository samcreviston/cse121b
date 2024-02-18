/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
 }

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
 }

function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
 
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

let divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
 
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

/* Decision Structure */
let calculateTotal = () => {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let membershipCheck = document.getElementById('membership').checked;

    if (membershipCheck == true) {
        document.querySelector('#total').value = subtotal - (subtotal * 0.2);
    }
    else {
        document.querySelector('#total').value = subtotal;
    }
}


//buttons
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

document.querySelector('#getTotal').addEventListener('Click', calculateTotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var numArray = document.getElementById('array');
numArray.innerHTML = numbersArray;

/* Output Source Array */


/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);
var oddsElement = document.getElementById('odds');
oddsElement.innerHTML = oddNumbers;
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 !== 1);
var evensElement = document.getElementById('evens');
evensElement.innerHTML = evenNumbers;

/* Output Sum of Org. Array */
let arraySum = numbersArray.reduce((total, current) => total + current, 0);
var sumElement = document.getElementById('sumOfArray');
sumElement.innerHTML = arraySum;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(num => num * 2);
var multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray
.map(num => num * 2)
.reduce((acc, curr) => acc + curr, 0);

var sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.innerHTML = sumOfMultiplied;