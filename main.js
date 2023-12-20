Webcam.set(
    {
        width:400,
        height:350,
        image_format:"png",
        png_quality:90 
    }
)

Webcam.attach("#camera")

function screenshot(){
    Webcam.snap(function(pic){
        document.getElementById("output").innerHTML="<img id='picture' src= '" +  pic  +  "'>"
    } )
}

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PrtR2GKKc/model.json", modelloaded)

function modelloaded(){
    console.log("model has loaded, HELLO HELLO")
}

function check(){
    img = document.getElementById('picture');
    classifier.classify(img, gotResult);

}

function gotResult(error, results){
    if(error){
        console.error(error);
    }       
    else{
        console.log(results);
        document.getElementById("person_name").innerHTML=results[0].label
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}























