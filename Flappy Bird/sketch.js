var bird;

function setup () {
	createCanvas (400, 400);
	bird=new Bird ();
	pipes.push(new Pipe());
}

function draw () {
	background (0);
	bird.update();
	bird.show();

	for (var i = 0; i<pipes.length; i++) {
		pipes[i].show();
		pipes[i].update();

	}

}

function keyPressed() {
	if (key == ' ') {
		bird.up();

	}

}
