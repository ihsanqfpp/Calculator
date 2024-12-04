const n = document.getElementById("input");

function button(input) {
    n.value += input;
}

function inputClear() {
    n.value = "";
}

function calculate() {
    try {
        n.value = eval(n.value);
    } catch (error) {
        n.value = "Error";
    }
}
