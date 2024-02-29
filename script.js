const numberButtons = document.querySelector(".numberButtons");
const display = document.querySelector(".display")
const add = document.querySelector(".add")
const subtract = document.querySelector(".subtract")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const enter = document.querySelector('.enter')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')
const clear = document.querySelector('.clear')

let operation = "";
let a = 0;
let b = 0;

function updateDisplay() {
    if (b != 0) {
        previous.textContent = b + " " + operation
    }
    else {
        previous.textContent = ""
    }
    
    current.textContent = a
}

function addition() {
    if (b == 0) {
        b = a
        a = 0    
    }
    
    operation = "+"
    updateDisplay()
}

function division() {
    if (b == 0) {
        b = a
        a = 0    
    }
    operation = "/"
    updateDisplay()
}

function subtraction() {
    if (b == 0) {
        b = a
        a = 0    
    }
    operation = "-"
    updateDisplay()
}

function multiplication() {
    if (b == 0) {
        b = a
        a = 0    
    }
    operation = "*"
    updateDisplay()
}

add.addEventListener("click", function() {
    addition()
})
subtract.addEventListener("click", function() {
    subtraction()
})
multiply.addEventListener("click", function() {
    multiplication()
})
divide.addEventListener("click", function() {
    division()
})

clear.addEventListener("click", function() {
    a = 0;
    b = 0;
    operation = ""

    updateDisplay()
    console.log(b)
})

enter.addEventListener("click", function() {
    if (operation != "") {
        if (operation == "+") {
            a = a + b
            b = 0
            operation = ""
        }
        else if (operation == "-") {
            a = b - a
            b = 0
            operation = ""
        }
        else if (operation == "*") {
            a = a * b
            b = 0
            operation = ""
        }
        else if (operation == "/") {
            a = b / a
            b = 0
            operation = ""
        }
    }

    updateDisplay()
})

// Use for loop to make all the number keys
for (let i = 9; i >= 0; i--) {
    const button = document.createElement('button');
    button.textContent = i
    button.classList.add(i)
    button.type = "button"
    button.addEventListener('click', function() {
        a = a * 10 + parseInt(button.className)
        updateDisplay()
    })
    numberButtons.appendChild(button);


}

