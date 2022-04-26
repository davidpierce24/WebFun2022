var gone = document.querySelector('.cookies');

function disappear() {
    gone.remove();
}

// var city = document.querySelector('li');

function popup(element) {
    alert('Loading weather report...')
}

// var red2 = document.querySelector('.red2');
// var red3 = document.querySelector('.red3');
// var red4 = document.querySelector('.red4');

// var blue1 = document.querySelector('.blue1');
// var blue2 = document.querySelector('.blue2');
// var blue3 = document.querySelector('.blue3');
// var blue4 = document.querySelector('.blue4');


function far() {
    if ((document.querySelector('#temp').value) == 'far'){
        document.querySelector('#red1').innerText = '75°'
        document.querySelector('.red2').innerText = '80°'
        document.querySelector('.red3').innerText = '69°'
        document.querySelector('.red4').innerText = '78°'
        document.querySelector('.blue1').innerText = '65°'
        document.querySelector('.blue2').innerText = '66°'
        document.querySelector('.blue3').innerText = '61°'
        document.querySelector('.red4').innerText = '70°'
    } else if ((document.querySelector('#temp').value) == 'celcius') {
        document.querySelector('#red1').innerText = '24°'
        document.querySelector('.red2').innerText = '27°'
        document.querySelector('.red3').innerText = '21°'
        document.querySelector('.red4').innerText = '26°'
        document.querySelector('.blue1').innerText = '18°'
        document.querySelector('.blue2').innerText = '19°'
        document.querySelector('.blue3').innerText = '16°'
        document.querySelector('.red4').innerText = '21°'
    };
    
    // var red1 = document.querySelector("#red1");
    // red1 = 75°

    // document.getElementById('red1').innerText = "75°";
    // console.log('running');
    
    // red2 = 80°
    // red3 = 69°
    // red4 = 78°
    // blue1 = 65°
    // blue2 = 66°
    // blue3 = 61°
    // blue4 = 70°'
}



