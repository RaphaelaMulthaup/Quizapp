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

    if(currentQuestion >= questions.length){
        document.getElementById('quizCard').innerHTML = endScreen();
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
        <h5 class="quizEnded">Quiz beendet!</h5>
        <h5 class="displayCorrectAnswers">Du hast <b>${rightAnswers}</b> von <b>${questions.length}</b> Fragen richtig beantwortet!</h5>
    `
}

function answer(selection){
    let question = questions[currentQuestion];
    if(selection == question['rightAnswer']){
        console.log('Richtig!!');
        document.getElementById(`answer${selection}`).parentNode.classList.add('bg-success');
        rightAnswers ++;
    } else{
        console.log('Falsche Antwort!');
        document.getElementById(`answer${selection}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer${question['rightAnswer']}`).parentNode.classList.add('bg-success');
    }
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion(){
    currentQuestion ++;
    showQuestion();
    document.getElementById('nextButton').disabled = true;
    // Das hat nicht geklappt. Habe ich bei Slack nachgefragt.
    // document.getElementById('cardBody').children.classList.remove('bg-danger', 'bg-success');      
    document.getElementById('answer1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer1').parentNode.classList.remove('bg-success');
    document.getElementById('answer2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success');
    document.getElementById('answer3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success');
    document.getElementById('answer4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success');
}