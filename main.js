var camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:400,
    image_format:'"png"',
    png_quality:90
});
Webcam.attach(camera);
function selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("display").innerHTML = '<img id="image" src="'+data_uri+'">'
    })
}
console.log("ml5 version is = "+ml5.version);