const userData = document.getElementById('userData');
const addNumberButton = document.getElementById('submitButton');
const NumbersToAnalyze = document.getElementById('numbersToAnalyze');
const analyzeButton = document.getElementById('analylerBtn');
const reset = document.getElementById('resetBtn');
const result = document.getElementById('resultOfAnalize');

addNumberButton.addEventListener('click', addNumber);
analyzeButton.addEventListener('click', analyzeNumber);
reset.addEventListener('click', () => {
  NumbersToAnalyze.innerHTML = '';
  numbers = [];
  userData.value = '';
  userData.focus();
  result.innerHTML = '';
});

let numbers = [];
let number;

function isRange(num) {
  if (parseInt(num) >= 0 && parseInt(num) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(num, array) {
  if (array.indexOf(Number(num)) != -1) {
    return true;
  } else {
    return false;
  }
}

function addNumber() {
  if (isRange(userData.value)){
    if (
      userData.value.length == 0 ||
      inList(userData.value, numbers)
    ) {
      window.alert(`The number is already added or the field is empty!`);
    } else if (
      userData.value.length != 0 &&
      !inList(userData.value, numbers)
    ) {
      number = parseInt(userData.value);
      numbers.push(number);
      let item = document.createElement('option');
      item.text = `Number ${number} is ready!`;
      NumbersToAnalyze.appendChild(item);
      userData.value = '';
      userData.focus();
      result.innerHTML = '';
    }
  } else {
    window.alert(`The number isn't in range!`)
  }
}

function analyzeNumber() {
  if (numbers.length == 0) {
    window.alert(`There's no numbers to analyze!`);
  } else if (numbers.length != 0) {
    let max = -Infinity;
    for (let number of numbers) {
      if (max < number) {
        max = number;
      }
    }

    let min = Infinity;
    for (let number of numbers) {
      if (min > number) {
        min = number;
      }
    }
    let sum = null;
    let media;
    for (let number of numbers) {
      sum += number;
    }
    avg = sum / numbers.length;
    result.innerHTML = `<p>${numbers.length} numbers were analyzed</p>
    <p>The highest value analyzed is ${max}</p>
    <p>The lowest value is ${min}</p>
    <p>The sum of all numbers is ${sum}</p>
    <p>The avarege of the numbers is ${avg.toFixed(2)}</p>`;
  }
}
