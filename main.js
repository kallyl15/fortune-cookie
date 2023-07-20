const modelOne = document.querySelector(".modelOne")
const modelTwo = document.querySelector(".modelTwo")
const bisFe = document.querySelector("#bis")
const btnReset = document.querySelector("#btnReset")
let frases = []

frases.push( "Então siga sendo tudo que assusta alguns e encanta outros ✨🦋" );
frases.push( "Nasci pra viver a história mais importante de todas - a minha. ✨" );
frases.push( "Ela é firme, decidida, justa, doce, livre ~ 🌻" );
frases.push( "Abençoada, protegida, iluminada, feliz, grata pela vida e guiada por Deus ✨🙏" );
frases.push( "Aceite-se e perdoe-se. Rodeie-se de amor e verdade. E siga sendo luz ❤️✨" );



bisFe.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', handleResetClick)


function handleResetClick() {
    toggleScreen()
    randomNumber = Math.floor(5*Math.random())
    modelTwo.querySelector("p").innerText = frases[randomNumber]
}

function toggleScreen() {
    modelOne.classList.toggle("hide")
    modelTwo.classList.toggle("hide")
}


