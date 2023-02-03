
const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');
const buttons = calculator.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const value = e.target.innerText;
    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      display.value = eval(display.value);
    } else if (value === '&larr;') {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  });
});




