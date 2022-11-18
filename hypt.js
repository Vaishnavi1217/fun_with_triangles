var baseValue = document.querySelector("#base-value");
var heightValue = document.querySelector("#height-value");
var calculateHypt = document.querySelector("#calculate-hypt");
var outputDiv = document.querySelector("#output-div");

function calculateHypotenuse(base,height){
    var hypo = Math.sqrt((base*base)+(height*height))
    return(hypo)
    
}
// 
function clickHandler(){
    var hypo = calculateHypotenuse(Number(baseValue.value),Number(heightValue.value))
    // console.log(hypo)
    message("The hypotenuse is:" + hypo)
    
}
calculateHypt.addEventListener("click",clickHandler)

function message(msg){
    outputDiv.innerText=msg
}