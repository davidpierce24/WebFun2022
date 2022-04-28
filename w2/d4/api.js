var poki;

async function getPoki() {
    var res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    var data = await res.json();
    poki = data;
}

function addPoki() {
    console.log(poki)
}