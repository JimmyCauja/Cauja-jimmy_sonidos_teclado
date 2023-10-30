let misonido;

function preload() {
  soundFormats('wav', 'mp3', 'ogg');
  misonido = loadSound('sonido/sonidomoneda');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(presionar);
}

function presionar() {
  misonido.play();
  circle(mouseX, mouseY, 20)
}

function draw() {
}

function mouseDragged() {
  misonido.play();
  circle(mouseX, mouseY, 20);
  
}

