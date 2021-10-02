const btn = document.querySelector("button");
const colortxt = document.querySelector("#colortxt");

btn.addEventListener("click", changeColor);

function changeColor() {
    let color = `hsl(${randomColor()})`;
    console.log(color);

    document.querySelector("main").style.backgroundColor = color;
    colortxt.textContent = color;
    colortxt.style.color = color;
};

function randomColor() {
    const hslVal = [];
    hslVal.push(Math.floor(Math.random() * (360 - 0) + 0));
    hslVal.push((Math.floor(Math.random() * (100 - 40) + 40)) + "%");
    hslVal.push((Math.floor(Math.random() * (100 - 35) + 35)) + "%");
    return hslVal.join(', ').toString();
};
