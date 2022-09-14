// Product Counter

const counterElement = document.getElementsByClassName('counter')
for (let i = 0; i < counterElement.length; i++) {
    counterElement[i].innerHTML = `
    <button class="counterButton" onclick="counter('-', 'count${i}')">
        <span class="material-symbols-outlined">remove</span>
    </button>
    <p id="count${i}">1</p>
    <button class="counterButton" onclick="counter('+', 'count${i}')">
        <span class="material-symbols-outlined">add</span>
    </button>
    `;
}

function counter(sign, cVarId) {
    const counterVar = document.getElementById(cVarId);
    let counterValue = Number(counterVar.innerHTML)
    if (sign === '+' && counterValue < 20) {counterVar.innerHTML = counterValue + 1;}
    else if (sign === '-' && counterValue > 1) {counterVar.innerHTML = counterValue - 1;}
}

// Convert all input values to uppercase
const inputElement = document.querySelectorAll('input');
for (let i = 0, l = inputElement.length; i < 7; i++) {
    inputElement[i].setAttribute('oninput', "this.value = this.value.toUpperCase()");
}