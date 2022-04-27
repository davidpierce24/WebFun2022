console.log("page loaded...");

function edit() {
    document.querySelector('.name').innerText = 'Jason Bourne';
    document.querySelector('.avatar-m').src = 'images/bourne.webp';
}

function disappear(element) {
    element.parentElement.parentElement.remove();
}


function yes() {
    document.querySelector('.badge1').innerText --;
    document.querySelector('.badge2').innerText ++;
}

function no() {
    document.querySelector('.badge1').innerText --;
}