console.log("page loaded...");

function playvid(element) {
    element.play();
    element.mute();
}

function pausevid(element) {
    element.pause();
}

function over(element) {
    element.play();
    element.mute(0);
}

function out(element) {
    element.pause();
}
