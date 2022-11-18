var quizForm = document.querySelector(".quiz-form")
var submitBtn = document.querySelector("#submit-ans")
var outputDiv = document.querySelector("#output-div")


const answers = ["90°","right angled","one right angle","12, 16, 20","45°"];

function scoreCalculator(){
    let score=0;
    let index=0;
    var resultStore = new FormData(quizForm)
    for(let value of resultStore.values()){
        if(value===answers[index]){
            score=score+1;
        }
        index=index+1;
    }
    // console.log(score)
    printResult("Your score is " + score + "!")
}

function printResult(msg){
    outputDiv.innerText=msg
}

submitBtn.addEventListener("click",scoreCalculator)