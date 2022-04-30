var displayDiv = document.querySelector("#display");

function press(num) {
    // displayDiv.innerText = '';
    displayDiv.innerText += num;
}

function clr() {
    displayDiv.innerText = 0;
}

function setOP()