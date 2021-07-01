// Display the current value in the output box

function display(val) {
    document.getElementById("textval").value+=val
}

// Evaluate the current expression

function evaluate() {
    let x = document.getElementById("textval").value
    let y = eval(x)
    document.getElementById("textval").value = y
}

function clr() {
    document.getElementById("textval").value = ""
}