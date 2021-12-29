Prediction = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function Take_Snapshot() {
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vujH-OxDB/model.json",modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}

function speak() {
    var synth = window.speechSynthesis;
    Speak_data = "Hand Gesture is " + Prediction;
    var utterThis = new SpeechSynthesisUtterance(Speak_data);
    synth.speak(utterThis);
}

