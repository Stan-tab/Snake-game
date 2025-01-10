const mainBox = document.querySelector(".mainBox");
const size = 32;
const finisher = document.createElement("div"); //important
pixeling(size);
let xPixel;
let applePlace;
let randomArr = [];
const pixels = [...document.querySelectorAll("div > * > *")];
let prevKey;
let shortX = 16;
let lgt = 3;
let shortY = 16;

finisher.classList = "ender";
finisher.textContent = "You suck!!";
mainBox.appendChild(finisher);
function pixeling(size) {
    for(let i = 0; i<size; i++) {
        const aciss = document.createElement("div");
        aciss.classList = "y" + +(i+1);
        mainBox.appendChild(aciss);
    };
    let columnsArr = [...document.querySelectorAll("div > *")]
    columnsArr.forEach(columns => {
        for(let i = 0; i<size; i++) {
            let col = columnsArr.indexOf(columns) + 1;
            const aciss = document.createElement("div");
            aciss.classList = "x" + +(i+1) + " y" + +col;
            columns.appendChild(aciss);
        };
    });
    return;
};

function apple() {
    applePlace = pixels[Math.floor(Math.random() * size * size)];
    if (applePlace.style.backgroundColor == "red") {applePlace = pixels[Math.floor(Math.random() * size * size)];};
    applePlace.style.backgroundColor = "orange";
}

function coordinates(xCor, yCor) {
    if(xCor == 0) {xCor = 1};
    if(yCor == 0) {yCor = 1};
    xPixel = document.querySelector(`.x${xCor}.y${yCor}`);
    if (!xPixel) {
        return console.error("lala");
    }
    return xPixel;
}

window.addEventListener("keypress", (e) => {
    if((e.key.toLowerCase() == "d") && prevKey != "a") { //right
        // shortX += 1;
        prevKey = "d";
    } else if((e.key.toLowerCase() == "a") && prevKey != "d") { //left
        // shortX -= 1;
        prevKey = "a";
    } else if((e.key.toLowerCase() == "w") && prevKey != "s") { //up
        // shortY -= 1;
        prevKey = "w";
    } else if((e.key.toLowerCase() == "s") && prevKey != "w") { //down
        // shortY += 1;
        prevKey = "s";
    }
});

function place(someDiv, maxSize = 32) {
    const forCount = pixels.indexOf(someDiv) + 1;
    if (forCount % maxSize == 0) {
        return [shortX = 32, shortY = forCount/maxSize];
    } else {
        return [shortX = forCount%maxSize, shortY = Math.floor(forCount/maxSize)+1]; 
    }
}

function move() {
    if (randomArr.length >= lgt) {
        randomArr.shift().style.backgroundColor = "lightslategrey";
    };
    randomArr.push(coordinates(shortX, shortY));
    if(coordinates(shortX, shortY).style.backgroundColor == "red") {finishing();};
    coordinates(shortX, shortY).style.backgroundColor = "red";
}

function moveSide(way = "d") {
    if(way == "d") { //right
        shortX += 1;
    } else if(way == "a") { //left
        shortX -= 1;
    } else if(way == "w") { //up
        shortY -= 1;
    } else if(way == "s") { //down
        shortY += 1;
    }
    if(shortX >= 33 || shortY >= 33 || shortX <= -1 || shortY <= -1) {shortX = 1; shortY = 1; finishing()};
}

function finishing() {
    finisher.style.display = "block";
}

function FPS(fps = 30) {
    apple();
    setInterval(() => {
        coordinates(shortX, shortY);
        moveSide(prevKey);
        move();
        if(xPixel == applePlace) {
            lgt += 1;
            apple();
        }
    }, 1000/fps)
}

FPS(10);