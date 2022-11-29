noseX=0
noseY=0
RightEyeX=0
RightEyeY=0
select12="chasma.png"

function Select(){
    selected_item= document.getElementById("filter_type").value
    if(selected_item=="Both"){
        document.getElementById("demo").innerHTML= "<img src='chasma.png'> <br> <img src='mustache.png'> "
        select12="Both"
    }else{
    document.getElementById("demo").innerHTML= "<img src='" + selected_item+"' id='selected_image'>"
    select12=selected_item
}
}

function preload(){
spex= loadImage("chasma.png")
mustache= loadImage("mustache.png")
}
function setup(){
    canvas= createCanvas(350,300)
 canvas.center()
 video= createCapture(VIDEO)
 video.hide()
poseNet= ml5.poseNet(video,modelLoaded)
poseNet.on('pose',getPoses)
}



function modelLoaded(){
    console.log("poseNet initializing successfully ")
}

function getPoses(results){
    if(results.length>0){
console.log(results)
console.log("For spex X lefteye = "+results[0].pose.leftEye.x)
console.log("For spex Y lefteye = "+results[0].pose.leftEye.y)
console.log("For spex X righteye= "+results[0].pose.rightEye.x)
console.log("For spex Y righteye = "+results[0].pose.rightEye.y)
console.log("For Mustache X = "+results[0].pose.nose.x +20)
console.log("For Mustache Y = "+results[0].pose.nose.y+20)

noseX= results[0].pose.nose.x
RightEyeX= results[0].pose.rightEye.x
noseY= results[0].pose.nose.y
RightEyeY= results[0].pose.rightEye.y

console.log("width : "+ width)
}

}

function draw(){
   
    image(video,0,0,500,500)
   
    if(select12=="Both"){
   
        image(spex, noseX-140, noseY-50, 120, 60)
        image(mustache, noseX-140, noseY+10, 120, 60)
    } else if(select12=="chasma.png"){
        image(spex, noseX-140, noseY-50, 120, 60)
    }else if(select12=="mustache.png"){
        image(mustache, noseX-140, noseY+10, 120, 60)
    }
}

function save_my(){
    save("developer_manjeet.png")
}