let currentOperator = null;
let oldValue = 0;

function bclick(val) {
    document.getElementById("screen").value += val;
}

function cleardisplay() {
    document.getElementById("screen").value = "";
}

function equalclick() {
    let newValue = Number(document.getElementById("screen").value);
    let result = 0;
    switch(currentOperator) {
        case '+':
            result = oldValue + newValue;
            break;
        case '-':
            result = oldValue - newValue;
            break;
        case '*':
            result = oldValue * newValue;
            break;
        case '/':
            if (newValue !== 0) {
                result = oldValue / newValue;
            } else {
                result = "Error";
            }
            break;
        default:
            result = "Error";
    }
    document.getElementById("screen").value = result;
    currentOperator = null;
}

function opr(operator) {
    oldValue = Number(document.getElementById("screen").value);
    currentOperator = operator;
    cleardisplay();
}
