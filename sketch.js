// let misonido;

// function preload() {
//   soundFormats('wav', 'mp3', 'ogg');
//   misonido = loadSound('sonido/son1');
// }

// function setup() {
//   let cnv = createCanvas(windowWidth, windowHeight);
//   cnv.mousePressed(presionar);
//   background(200, 220, 2);
// }

// function presionar() {
//   misonido.play();
//   circle(mouseX, mouseY, 20)
// }

// function draw() {
// }

// function mouseDragged() {
//   misonido.play();
//   circle(mouseX, mouseY, 20);
  
// }

let sonidos = [];

function preload() {
	for (let i = 0; i < 7; i++) {
		sonidos[i] = loadSound('sonido/' + i + '.mp3');
	}
}

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(presionado);
  background(200, 290, 89);
}

function presionado() {
	let r = Math.floor(random(7));
	circle(mouseX, mouseY, 20);

	switch (r) {
		case 0:
			sonidos[0].play();
			break;
		case 1:
			sonidos[1].play();
			break;
		case 2:
			sonidos[2].play();
			break;
		case 3:
			sonidos[3].play();
			break;
		case 4:
			sonidos[4].play();
			break;
		case 5:
			sonidos[5].play();
			break;
		case 6:
			sonidos[6].play();
			break;
	}
}

function draw() {}
function mouseDragged() {
	let r = Math.floor(random(7));
  circle(mouseX, mouseY, 20);
  fill(19, 30, 100);

	switch (r) {
		case 0:
			sonidos[0].play();
			break;
		case 1:
			sonidos[1].play();
			break;
		case 2:
			sonidos[2].play();
			break;
		case 3:
			sonidos[3].play();
			break;
		case 4:
			sonidos[4].play();
			break;
		case 5:
			sonidos[5].play();
			break;
		case 6:
			sonidos[6].play();
			break;
	}
}

function keyPressed() {
	switch (key) {
		case 'j':
			sonidos[0].play();
			break;
		case 'i':
			sonidos[1].play();
			break;
		case 'm':
			sonidos[2].play();
			break;
		case 'y':
			sonidos[3].play();
			break;
		case 'a':
			sonidos[4].play();
			break;
		case 'l':
			sonidos[5].play();
			break;
		case 'e':
			sonidos[6].play();
			break;
	}
}