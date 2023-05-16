
var name = prompt("Enter your name:");
var gender = prompt("Enter your gender (male/female):");
var age = parseInt(prompt("Enter your age:"));


if (age <= 0) {
  alert("Invalid age!");
}


var skipMessage = confirm("Do you want to skip the welcoming message?");


if (gender === "male") {
  if (skipMessage) {
    alert("Welcome, " + name);
  } else {
    alert("Welcome, Mr. " + name);
  }
} else if (gender === "female") {
  if (skipMessage) {
    alert("Welcome, " + name);
  } else {
    alert("Welcome, Ms. " + name);
  }
} else {
  alert("Welcome, " + name);
}

var answers = [];


function askQuestion(question) {
  var answer = prompt(question + " (Yes/No):");
  if (answer === "" || (answer !== "Yes" && answer !== "No")) {
    answer = "invalid";
  }
  return answer;
}


var question1 = askQuestion("Question A: Do you like pizza?");
var question2 = askQuestion("Question B: Have you traveled abroad?");
var question3 = askQuestion("Question C: Do you enjoy hiking?");


answers.push(questionA, questionB, questionC);


console.log("Answers:");
for (var i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}



