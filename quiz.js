//Inserted Questions and Answers
const questions = [
    {
        question: "What is inflation?",
        answers: [
            { text: "Decrease in the general price level", correct: false},
            { text: "Increase in the general price level", correct: true},
            { text: "No change in the general price level", correct: false},
            { text: "Increase in unemployment rate", correct: false},
        ]
    },

    {
        question: "How did inflation happen?",
        answers: [
            { text: "Overwhelming Supply, Limited Demand", correct: false},
            { text: "Overwhelming Demand, Limited Supply", correct: true},
            { text: "Natural disaster disrupts supply chain, Increases demands", correct: false},
            { text: "Increases taxes automatically leads to inflation", correct: false},
        ]
    },

    {
        question: "What is the opposite of inflation?",
        answers: [
            { text: "Stagflation", correct: false},
            { text: "Hyperinflation", correct: false},
            { text: "Deflation", correct: true},
            { text: "Disinflation", correct: false},
        ]
    },

    {
        question: "What is cost-push inflation caused by?",
        answers: [
            { text: "Increase in consumer spending", correct: false},
            { text: "Decrease in production costs", correct: false},
            { text: "Decrease in aggregate demand", correct: false},
            { text: "Increase in production costs", correct: true},
        ]
    },

    {
        question: "What is CPI?",
        answers: [
            { text: "Consumer Price Index", correct: true},
            { text: "Cost Price Inflation", correct: false},
            { text: "Cost Percentage Increase", correct: false},
            { text: "Charge Penalty Inflation", correct: false},
        ]
    },

    {
        question: "What is Consumer Price Index (CPI) used for?",
        answers: [
            { text: "Measure of economic growth", correct: false},
            { text: "Measure of income inequality", correct: false},
            { text: "Measure of inflation", correct: true},
            { text: "Measure of unemployment rate", correct: false},
        ]
    },

    {
        question: "What is the impact of hyperinflation?",
        answers: [
            { text: "Increase in purchasing power", correct: false},
            { text: "Decrease in uncertainty", correct: false},
            { text: "Collapse in currency", correct: true},
            { text: "Increase in savings", correct: false},
        ]
    },

    {
        question: "What is demand-pull inflation caused by?",
        answers: [
            { text: "Increase in consumer spending", correct: false},
            { text: "Decrease in production costs", correct: false},
            { text: "Decrease in aggregate demand", correct: false},
            { text: "Increase in product prices", correct: true},
        ]
    },

    {
        question: "What is built-in inflation caued by?",
        answers: [
            { text: "Increase in wage cost", correct: true},
            { text: "Decrease in production costs", correct: false},
            { text: "Decrease in aggregate demand", correct: false},
            { text: "Increase in product prices", correct: false},
        ]
    },

    {
        question: "What is the difference between anticipated and unanticipated inflation?",
        answers: [
            { text: "Anticipated is constant, unanticipated is volatile", correct: false},
            { text: "Anticipated is expected, unanticipated is unexpected", correct: true},
            { text: "Anticipated is controlled, unanticipated is market-driven", correct: false},
            { text: "Anticipated affects certain goods, unanticipated affects all goods", correct: false},
        ]
    }

];

//Access element by using id
const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next");

//Set variables for Timer
var timer;
var timerInterval;
var timerElement = document.getElementById("timer");

//Reset variables to 0
let currentQuestionNo = 0;
let score = 0;

//Set function to start quiz
function startQuiz(){
    currentQuestionNo = 0;
    score = 0;
    timerInterval = null;
    sec = 0;
    timerElement.innerHTML = "00:00";
    nextBtn.innerHTML = "Next";
    displayQns();
}

//Set function to activate timer
function Timer(){
    var sec = 0;
    timerInterval = setInterval(() => {
        timerElement.innerHTML = "00:" + sec;
        sec ++;
    }, 1000)
}

//Set function to display questions
function displayQns(){
    Reset(); //Reset before displaying new questions
    let currentQuestion = questions[currentQuestionNo]; //Retrieving questions
    let questionNo = currentQuestionNo + 1; //Setting index
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    //Display answer for each question
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);

        //Verifying correct answer
        if(answer.correct){ 
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer); //Display answer when clicked

        if (questionNo === 1){
            button.addEventListener("click", Timer); //Start timing when clicked
        }
    });
}

//Set function to reset every question
function Reset(){
    nextBtn.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
} 

//Set function to add to list everytime an answer is selected
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    //if its correct, add into list and increment score
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }

    //if its wrong, add into list, doesn't affect score
    else{
        selectedBtn.classList.add("wrong");
    }

    //For each questions, if its true, add to correct list and enable the next button.
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block"; //display next button
}

//Function to display the score from incrementing correct answer
function displayScore(){
    Reset(); //Reset before displaying new questions
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Try Again";
    nextBtn.style.display = "block";
    clearInterval(timerInterval); //Stops the timer from running

}

//Function to navigate questions
function handleNextButton(){
    currentQuestionNo++ //increase question index

    //continue running question until end of questions
    if (currentQuestionNo < questions.length){
        displayQns();
    }

    //if end of questions, display score
    else{
        displayScore();
    }
}

//When next button is clicked, display question
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionNo < questions.length){
        handleNextButton();
    }

    else{
        startQuiz();
    }
})

//To start the loop
startQuiz();