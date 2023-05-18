
var name = prompt("Enter your name:");
var gender = prompt("Enter your gender (male/female):");
var age = parseInt(prompt("Enter your age:"));

if (age <= 0) {
  alert("Invalid age!");
}

var skipMessage = prompt("Do you want to skip the welcoming message? Enter 'Yes' or 'No'").toLowerCase();
while (skipMessage !== "yes" && skipMessage !== "no") {
  skipMessage = prompt("Invalid input. Please enter 'Yes' or 'No' to skip the welcoming message.").toLowerCase();
}

if (skipMessage === "yes") {
  // Skip the welcome message
} else {
  if (gender === "male") {
    alert("Welcome, Mr. " + name);
  } else if (gender === "female") {
    alert("Welcome, Ms. " + name);
  } else {
    alert("Welcome, " + name);
  }
}


var answers = [];


function askQuestion(question) {
  var answer = prompt(question + " (Yes/No):");
  if (answer === "" || (answer !== "Yes" && answer !== "No")) {
    answer = "invalid";
  }
  return answer;
}


var question1 = askQuestion("Question 1: Do you like pizza?");
var question2 = askQuestion("Question 2: Have you traveled abroad?");
var question3 = askQuestion("Question 3: Do you enjoy hiking?");


answers.push(question1, question2, question3);


console.log("Answers:");
for (var i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}



