let misonido;

function preload() {
  soundFormats('wav', 'mp3', 'ogg');
  misonido = loadSound('sonido/son1');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(presionar);
  background(200, 220, 2);
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

