const mainBox = document.querySelector(".mainBox");
const size = 32;
pixeling(size);
let xPixel;
let randomArr = [];
const pixels = [...document.querySelectorAll("div > * > *")];

function pixeling(size=32) {
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

function coordinates(xCor, yCor) {
    xPixel = document.querySelector(`.x${xCor}.y${yCor}`);
    if (!xPixel) {
        return console.error("lala");
    }
    return xPixel;
}

window.addEventListener("keypress", (e) => {
    if(e.key.toLowerCase() == "d") { //right
        if (randomArr.length >= 3) {
            randomArr.shift().style.backgroundColor = "lightslategrey";
        }
        randomArr.push(coordinates(shortX, shortY))
        coordinates(shortX, shortY).style.backgroundColor = "red";
        shortX += 1;
    } else if(e.key.toLowerCase() == "a") { //left
    } else if(e.key.toLowerCase() == "w") { //up
    } else if(e.key.toLowerCase() == "s") { //down
    }
});

let shortX = 1;
let shortY = 1;

function FPS(fps = 30) {
    setInterval(() => {
        if(shortY == 33) {
            shortY = 1;
        }
        if (randomArr.length >= 3) {
            randomArr.shift().style.backgroundColor = "lightslategrey";
        }
        randomArr.push(coordinates(shortX, shortY))
        coordinates(shortX, shortY).style.backgroundColor = "red";
        shortX += 1;
        if(shortX > 32) {
            shortY += 1;
            shortX = 1;
        }
        // console.log(randomArr);
    }, 1000/fps)
}

FPS(10);