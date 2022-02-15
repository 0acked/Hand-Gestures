Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}

console.log("ml5 version",ml5.version);
classifier=ImageClassifier("https://teachablemachine.withgoogle.com/models/9-xW-ZMB3/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model loaded!");
}
