

var elEncabezado = document.querySelector("header");
var elColor, minion;

function preload() {
    minion = loadJSON("https://catabrtvls.github.io/prueba/datos.json");
}

function setup() {
    var lasOpciones = [];
    Object.values(minion).forEach((x) => {
     if((x.level == "In Training")) {
        lasOpciones.push(x.img)
      }});
    console.log(lasOpciones);

    var descarga = select("#descarga");
    descarga.mousePressed(artemania);
    var descarga = select("#borra");
    descarga.mousePressed(borrador);
    createElement("h1", "Dibuja este minion").parent(elEncabezado).id("title");
    createImg(random(lasOpciones),"...").addClass("bwaby");
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background("#ffffff");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function artemania() {
    saveCanvas("mi_minion", "jpg");
}

function borrador() {
    background("#ffffff");
}
