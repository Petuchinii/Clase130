function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
classifier = ml5.imageClassfier('MobileNet', modeloCargado);
}

function preload() {

}

function draw() {
    image(video, 0, 0, 300, 300);
}