Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera= document.getElementById("camera");
 
Webcam.attach('#camera');

 function capture()
 {
    Webcam.snap( function(data_uri) {
       
       document.getElementById("result").innerHTML = 
        '<img id="selfie" src="'+data_uri+'"/>';
    } );
 }
 
console.log('ml5 version:', ml5.version);
Classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CEOqJlKtR/model.json', modelLoaded);

function modelLoaded()
{
   console.log("model loaded!");
}

function check()
{
   img= document.getElementById("selfie");
   Classifier.classify(img, gotResult);
}

function gotResult(error, result)
{
   if (error)
   {
      console.error(error);
   }
   else 
   {
      console.log(result);
      document.getElementById("object").innerHTML=result[0].label;
      document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(2);
   }
    
}
