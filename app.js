"use strict";


// how many questions
let numberOfQuestions = 3;
//what questions should appear
let questionArray = [
  "Your name? ",
  "Your last name ? ",
  "Can't be asked, right ? ",
  "Best company that you have worked for? "
];
//which question iam on
let questionCounter = 0;
//user inputs
let userInputs = [];

// console.log(`The "i" of  "for" loop `);
for (let i = numberOfQuestions; i >= 0; i--) {
  console.log(i);
  //print the questions + how many left to answer
  userInputs.push(prompt(questionArray[questionCounter] + `(${numberOfQuestions--}  questions left)`));
  //current "questionCounter" variable (it should go up)
  questionCounter++;
  console.log(questionCounter);
}
// the story with possible replacements
let originalStory = `<h2>Oh hello there ${userInputs[0]} ${userInputs[1]}!  ${userInputs[3]} ? that is the worst place ever ! I knew that you would say -  ${userInputs[2]} </h2>`;

 // End of User Inputs
 alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  console.log(originalStory);
  document.write(originalStory);
