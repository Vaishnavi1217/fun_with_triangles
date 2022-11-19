var side1 = document.querySelector("#side-1")
var side2 = document.querySelector("#side-2")
var side3 = document.querySelector("#side-3")
var calculateAreaBtn = document.querySelector("#calculate-area")
var outputDiv = document.querySelector("#output-div")

function calculateArea(s1,s2,s3){
    var semiPerimeter = (s1+s2+s3)/2;
    var area = Math.sqrt(semiPerimeter*(semiPerimeter-s1)*(semiPerimeter-s2)*(semiPerimeter-s3))
    return(area)
}

function clickHandler(){
    var area = calculateArea(Number(side1.value),Number(side2.value),Number(side3.value))
    // console.log(area)
    showMsg("Area of the triangle with given sides is : " + area + " units")
    
}

function showMsg(msg){
    outputDiv.innerText=msg;
}
calculateAreaBtn.addEventListener("click",clickHandler)