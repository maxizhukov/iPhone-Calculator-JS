const inputCalc = document.querySelector('.account'),
    resultCalc = document.querySelector('.result');

function input(i) {
    inputCalc.value = inputCalc.value + i
}
function result() {
    if( eval(inputCalc.value) == undefined) {
        inputCalc.value = '0,00';
    }if( eval(inputCalc.value) == Infinity) {
        inputCalc.value = 'Dividing by zero is not allowed';
    }
    inputCalc.value = eval(inputCalc.value);
}
function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length-1)
}
function reset() {
    inputCalc.value = '';
}