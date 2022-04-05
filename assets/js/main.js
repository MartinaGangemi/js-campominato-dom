document.getElementById("play").addEventListener("click", play);

function play (){
document.getElementById("cells").innerHTML = '';
let difficoltà = document.getElementById("difficoltà").value;
console.log(difficoltà)

// creo delle condizioni in base alla difficoltà

if (difficoltà == "facile"){
    createGrid("cell", "cell_easy_mode", 100)
    coloredSquare (".cell", "active")
    generateBombs (100)
     
    } else if(difficoltà == "media"){
        createGrid("cell", "cell_normal_mode", 81)
        coloredSquare (".cell", "active")
        generateBombs (81)
        
    } else {
        createGrid("cell", "cell_hard_mode", 49)
        coloredSquare (".cell", "active")
        generateBombs (100)
    }
}

// creo la funzione per generare le celle


function createGrid(className, secondClassName, numeroDifficoltà){
    const cellsElement = document.getElementById("cells")

    // ciclo per generare tot quadratini
    for (let i = 1; i<=numeroDifficoltà; i++){
    const divTag = document.createElement("div")
    divTag.classList.add(className)
    divTag.classList.add(secondClassName)
    cellsElement.append(divTag)
    divTag.append(i)
   } 
}



//funzione quando clicco sul quadrato si colora
function coloredSquare (selector, activeClass){
const arrayCell = document.querySelectorAll(selector);
for (let k = 0; k<arrayCell.length;k++){
    const quadratino = arrayCell[k]
    quadratino.addEventListener("click", function (){
        console.log(this, k)
        this.classList.add(activeClass)
     })
    }     
}




// creo 16 numeri random
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// creo una funzione per geenerare le bombe

function generateBombs (numerocelle) {
const randomBomb = [];
while (randomBomb.length !==16){
     const bomb = randomNumbers (1, numerocelle)
     if(!randomBomb.includes(bomb)){
         randomBomb.push(bomb)
     }
 }

 console.log(randomBomb)
}





    