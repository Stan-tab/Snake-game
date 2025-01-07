const mainBox = document.querySelector(".mainBox");
griding();
const pixels = [...document.querySelectorAll("div *")];
const snake = {
    start: function() {
        coordinates(16, 16);
    },
    head: function() {},
    tail: function() {},
}

function pixeling(size=32, parent, cls="y") {
    for(let i = 0; i<size; i++) {
        const aciss = document.createElement("div");
        aciss.classList = cls + +(i+1);
        parent.appendChild(aciss);
    };
};

function griding() {
    pixeling(undefined , mainBox);
    x_aciss = [...document.querySelectorAll(".mainBox > div")];
    x_aciss.forEach(element => {
        pixeling(undefined, element, "x");
    });
};

function coordinates(x, y) {
    yy = pixels[(32 * (y-1)) + (y-1)];
    xx = pixels[(32 * (y-1)) + (y-1) + x];
    return xx;
};