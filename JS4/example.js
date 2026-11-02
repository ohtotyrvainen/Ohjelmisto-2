function ChangeColor(obj) {
    obj.style.color = "peru";
}

document.getElementById("MyButton").onclick = ChangeBackgroundColor;

function ChangeBackgroundColor() {
    document.querySelector("body").style.background = "MediumOrchid";
}