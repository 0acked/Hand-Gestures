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
function takePred(){
    img= document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(results,error){
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        prediction= results[0].label;
        speak();

        if(results[0].label=="Thumbs up!")
        {
            document.getElementById("predict").innerHTML="prediction-<i>&#128078;</i>";
        }
        if(results[0].label=="Thumbs down...")
        {
            document.getElementById("predict").innerHTML="prediction-<i>&#128077;</i>";
        }
        if(results[0].label=="Hi!")
        {
            document.getElementById("predict").innerHTML="prediction-<i>&#9995;</i>";
        }
        if(results[0].label=="Perfect!")
        {
            document.getElementById("predict").innerHTML="prediction-<i>&#128076;</i>";
        }
        if(results[0].label=="Punk!")
        {
            document.getElementById("predict").innerHTML="prediction-<i>&#129304;</i>";
        }
        if(results[0].label=="Point!")
        {
            document.getElementById("predict").innerHTML="prediction-<i>&#9757;</i>";
        }
    }
}
function speak(){
    synth= window.speechSynthesis;
    speakdata1="The first prediction is"+prediction;
    var utterThis=new SpeechSynthesisUtterance(speakdata1);
    synth.speak(utterThis);
}
