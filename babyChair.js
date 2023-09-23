Status = "";
babyChair_IMG = '';
objects = [];

function preload() {
    babyChair_IMG = loadImage("IMG-6964.JPG");
}

function setup() {
    canvas = createCanvas(640, 640);
    canvas.center();

    video = createCanvas(VIDEO);
    video.size(640, 640);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}