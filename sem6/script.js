const app = document.getElementById('app');

// Cria display
const display = document.createElement('div');
display.className = 'display';
display.innerText = '0';
app.appendChild(display);

// Layout dos botões
const buttons = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
];

// Criar os botões dinamicamente
buttons.forEach(rowValues => {
    const row = document.createElement('div');
    row.className = 'row';
    rowValues.forEach(value => {
        const btn = document.createElement('button');
        btn.innerText = value;
        btn.className = 'button';

        if (value === '0') btn.classList.add('zero');
        if (['AC', '+/-', '%'].includes(value)) btn.classList.add('gray');
        else if (['/', '*', '-', '+', '='].includes(value)) btn.classList.add('orange');
        else btn.classList.add('dark');

        btn.addEventListener('click', () => onButtonClick(value));
        row.appendChild(btn);
    });
    app.appendChild(row);
});

let current = '';
let operator = '';
let previous = '';

function onButtonClick(value) {
    if (!isNaN(value) || value === '.') {
        current += value;
        display.innerText = current;
    } else if (['+', '-', '*', '/'].includes(value)) {
        operator = value;
        previous = current;
        current = '';
    } else if (value === '=') {
        if (current && operator && previous) {
            current = eval(`${previous}${operator}${current}`).toString();
            display.innerText = current;
            operator = '';
            previous = '';
        }
    } else if (value === 'AC') {
        current = '';
        operator = '';
        previous = '';
        display.innerText = '0';
    } else if (value === '+/-') {
        current = (parseFloat(current) * -1).toString();
        display.innerText = current;
    } else if (value === '%') {
        current = (parseFloat(current) / 100).toString();
        display.innerText = current;
    }
}
