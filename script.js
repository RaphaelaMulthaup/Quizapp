let questions = [
    {
        "question": "Wo in Hogwarts ist das Ravenclaw Diadem versteckt?",
        "answer1": "Im Ravenclaw-Gemeinschaftsraum",
        "answer2": "Im Raum der Wünsche",
        "answer3": "In Dumbledores Büro",
        "answer4": "In der Küche",
        "rightAnswer": 2
    },

    {
        "question": "Auf welcher Position spielt Ron Weasley in Gryffindor-Quidditchteam?",
        "answer1": "Hüter",
        "answer2": "Sucher",
        "answer3": "Treiber",
        "answer4": "Jäger",
        "rightAnswer": 1
    },

    {
        "question": "Wer entdeckt Harry, nachdem er im Hogwarts-Express von Draco Malfoy attackiert wurde?",
        "answer1": "Professor McGonagall",
        "answer2": "Rubeus Hagrid",
        "answer3": "Ginny Weasley",
        "answer4": "Nymphadora Tonks",
        "rightAnswer": 4
    },

    {
        "question": "Was für ein Gegenstand ist der Portschlüssel mit dem Harry, Hermine, die Weasleys und die Diggorys zum Finale der Quidditch-Weltmeisterschaft reisen?",
        "answer1": "Eine Bratpfanne",
        "answer2": "Eine Zeitung",
        "answer3": "Ein Stiefel",
        "answer4": "Eine Flasche",
        "rightAnswer": 3
    },

    {
        "question": "Wo lebt Charlie Weasley wärend er Drachen studiert?",
        "answer1": "In Romänien",
        "answer2": "In den USA",
        "answer3": "In Wales",
        "answer4": "In Dover",
        "rightAnswer": 1
    },

    {
        "question": "Welche Gestallt nimmt der Irrwicht an, wenn Harry mit Professor Lupin den Patronus-Zauber übt?",
        "answer1": "Die eines Inferis",
        "answer2": "Die von Onkel Vernon",
        "answer3": "Die eines Dementors",
        "answer4": "Die von Voldemort",
        "rightAnswer": 3
    },

    {
        "question": "Wo, sagt Tom Riddle, ist er zum ersten Mal auf des Thema Horkruxe gestoßen?",
        "answer1": "Im Weisenhaus",
        "answer2": "In der verbotenen Abteilung der Hogwarts-Bibliothek",
        "answer3": "In der Kammer des Schreckens",
        "answer4": "Auf dem Astronomieturm",
        "rightAnswer": 2
    }
];

let currentQuestion = 0;
let rightAnswers = 0;

function init(){
    document.getElementById('numberQuestions').innerHTML= questions.length;
    showQuestion();
}

function showQuestion(){
    let percent = currentQuestion / questions.length * 100;
    document.getElementById('progressBar').style=`width: ${percent}%`;

    if(currentQuestion >= questions.length){
        setTimeout(function(){
            document.getElementById('quizCard').innerHTML = endScreen();
        },600);
    } else{
        let question = questions[currentQuestion];

        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];
        document.getElementById('numberCurrentQuestion').innerHTML = currentQuestion + 1;    
    }
}

function endScreen(){
    return /*html*/`
        <img src="./img/hermione.jpg" class="card-img-top">
        <div class="progress">
            <div class="progress-bar w-100" id="progressBar" role="progressbar"></div>
        </div>
        <h5 class="quizEnded">Quiz beendet!</h5>
        <h5 class="displayCorrectAnswers">Du hast <b>${rightAnswers}</b> von <b>${questions.length}</b> Fragen richtig beantwortet!</h5>
        <button id="restart" class="btn btn-primary btnPurple" onclick="restart()">Nochmal spielen</button>

    `
}

function answer(selection){
    let question = questions[currentQuestion];
    if(selection == question['rightAnswer']){
        document.getElementById(`answer${selection}`).parentNode.classList.add('bg-success');
        rightAnswers ++;
    } else{
        document.getElementById(`answer${selection}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${question['rightAnswer']}`).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion(){
    currentQuestion ++;
    showQuestion();
    document.getElementById('nextButton').disabled = true;
    let children = document.getElementById('cardBody').children;
    for (let index = 0; index < children.length; index++) {
        let div = children[index];
        div.classList.remove('bg-danger', 'bg-success');
    }
}

function restart(){
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('quizCard').innerHTML = htmlQuiz();
    init();
}

function htmlQuiz(){
    return /*html*/ `
            <img src="./img/hogwarts.jpg" class="card-img-top">
            <div class="progress">
              <div class="progress-bar" id="progressBar" role="progressbar" style="background-color: #6B63B5" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="card-body" id="cardBody">
              <h5 class="card-title" id="questionText">Frage</h5>

              <div class="card mb-2 quizAnswerCard" onclick="answer(1)">
                <div class="card-body" id="answer1">
                  Antwort
                </div>
              </div>

              <div class="card mb-2 quizAnswerCard" onclick="answer(2)">
                <div class="card-body" id="answer2">
                  Antwort
                </div>
              </div>

              <div class="card mb-2 quizAnswerCard" onclick="answer(3)">
                <div class="card-body" id="answer3">
                  Antwort
                </div>
              </div>
              
              <div class="card mb-2 quizAnswerCard" onclick="answer(4)">
                <div class="card-body" id="answer4">
                  Antwort
                </div>
              </div>

              <div class="questionFooter">
                <span>
                  <b id="numberCurrentQuestion">1</b> von <b id="numberQuestions"></b> Fragen
                </span>
               <button disabled id="nextButton" class="btn btn-primary btnPurple" onclick="nextQuestion()">Nächste Frage</button>
              </div>
            </div>
    `
}