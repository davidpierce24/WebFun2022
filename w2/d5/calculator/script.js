var displayDiv = document.querySelector("#display");

function press(num) {
    if(displayDiv.innerText == 0) {
        displayDiv.innerText = '';
    }
    displayDiv.innerText += num;
}

function clr() {
    location.reload();
}

var keep;

var op;

function setOP(input) {
    keep = displayDiv.innerText;
    console.log(keep);
    op = input;
    // console.log(displayDiv.innerText);
    displayDiv.innerText = 0;
    return keep;
}

function calculate() {
    var add = displayDiv.innerText;
    add = parseInt(add);
    keep = parseInt(keep);
    if(op =='+') {
        var answer = keep + add;
    }
    else if (op == '/') {
        var answer = keep / add;
    }
    else if (op == '*') {
        var answer = keep * add;
    }
    else if (op == '-') {
        var answer = keep * add;
    }
    displayDiv.innerText = answer;
}
