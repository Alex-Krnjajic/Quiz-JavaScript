var question1 = ["A,B or C?", "A", "B", "C"];
var question2 = ["1,2 or 3?", "1", "2", "3"];
var answer = [1, 2, 3]

var questions = [question1, question2];


function questionsGet() {
    
    var questionRandom =  questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("question").innerHTML = questionRandom[0]
    questions.splice(questionRandom, 1)
    for (i = 1; i < 4;i++) {
         questionRandom[i]
        
    }
}
function
