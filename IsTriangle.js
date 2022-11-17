var inputs = document.querySelectorAll(".angle-input")
var isTriangleBtn = document.querySelector("#is-triangle-btn")
var outputEl = document.querySelector("#output")


function calculateSumOfAngles(angle1,angle2,angle3){
    var sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;
    
}

function isTriangle(){
    var ang1=Number(inputs[0].value);
    var ang2=Number(inputs[1].value);
    var ang3=Number(inputs[2].value);
    var sum=calculateSumOfAngles(ang1,ang2,ang3);

    if(sum===180){
        outputEl.innerText="It is a triangle"
    }
    else{
        outputEl.innerText="It is not a triangle"
    }
    // var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    // console.log(sumOfAngles)
    // if(sumOfAngles===180){
    //     console.log("Its is a triangle")
    // }
    // else{
    //     console.log("It is not a triangle")
    // }
}

isTriangleBtn.addEventListener("click",isTriangle);
