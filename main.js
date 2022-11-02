img = "";
status = "";

function preload() {
image = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(550,550);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
    if (error){
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img,0,0,550,550);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect("30,60,450,650");

    fill("#FF0000");
    text("Cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
 }