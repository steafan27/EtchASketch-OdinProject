const gridTemplate = document.getElementById('tile-container-grid-parent');
const inputSlider = document.getElementById('amount-of-tiles');

inputSlider.addEventListener('click',() =>{
    let inputSliderValue = Number(inputSlider.value);
    setNumberOfTiles(inputSliderValue);
    const numberOfGridTemplateChildren = gridTemplate.children.length;
    gridTemplate.style.gridTemplateColumns = `repeat(${Math.sqrt(numberOfGridTemplateChildren)}, 1fr)`;

});

function setNumberOfTiles(inputSlider){
    while(gridTemplate.firstChild){
        gridTemplate.removeChild(gridTemplate.firstChild);
    }
    //this code clears the board every time the function is called
    //the code below then addss all appropriate children 

    let numOfDivs = inputSlider **2
    let i = 0;
    while(i < numOfDivs){
        const divTile = document.createElement('div');
        divTile.classList.add('tile-grid-item');
        gridTemplate.appendChild(divTile);
        divTile.addEventListener('mouseover', changColor)//here is where i can change the button call so that it refelects the user choice
        i++
        //this code block adds an element child over and over until the loop is false
        //this code also makes alll needed modifications to the new element as well
        //such as addint an even listener every single time
    }
}

function changColor(){
    this.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    //this changes the tile from purple to rbg
}



//NOTE so everything works but upon intital setup the color changing does not work.
//NOTE will possibly have to make board look pristeen untill populated
//Once board is populated color changing can work


///Side not I believe i can call foreach on something pass anon arrow function and then do this.addeventlistener etc etc for future reference insteaf od using a loop