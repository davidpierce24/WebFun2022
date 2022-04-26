console.log("page loaded...");

function edit() {
    document.querySelector('.name').innerText = 'Jason Bourne';
    document.querySelector('.avatar-m').src = 'images/bourne.webp';
}

function disappear(element) {
    element.parentElement.parentElement.remove();
}

