Webcam.set({
width : 350,
height : 300,
image_format : "PNG",
png_quality : '100'
});

Webcam.attach("#cam");

function Snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("res").innerHTML = "<img id='resultImage' src='"+data_uri+"'>";
        
        
    });
    
}

a_model = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/hZYuseIsL/model.json",
    holded
    );

    function holded(){
        console.log("tolded");
    }

    function cop_o(){
        img_result = document.getElementById("resultImage");

a_model.classify(img_result,gotRES);
}

 function gotRES(error,results){
  if(error){
      console.log(error);
  }else{
      console.log(results);
      document.getElementById("obj_name").innerHTML = results[0].label;
      document.getElementById("acc_name").innerHTML = results[0].confidence.toFixed(3);
  }
 }
    