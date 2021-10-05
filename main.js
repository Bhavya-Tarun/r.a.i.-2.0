function setup(){
    canvas = createCanvas(300, 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide;
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hrBVRTInS/model.json", modelLoaded);
}

function draw(){
    Image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log("Model-loaded");
}

function gotResults(result, error){
    if (error) {
      console.log(error);
    } else {
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

