"use strict";


// how many questions
let numberOfQuestions = 4;
//what questions should appear
let questionArray = [
  "Ka Tevi sauc?",
  "Cik Tev gadi ?",
  "Tu lohs esi ?",
  "Diršana"
];
//which question iam on
let questionCounter = 0;
//user inputs
let userInputs = [];

// console.log(`The "i" of  "for" loop `);
for (let i = numberOfQuestions; i >= 0; i--) {
  console.log(i);
  //print the questions + how many left to answer
  userInputs.push(prompt(questionArray[questionCounter] + `(${numberOfQuestions--} questions left)`));
  //current "questionCounter" variable (it should go up)
  questionCounter++;
  console.log(questionCounter);
}
// the story with possible replacements
let originalStory = `<h2>Sveiks ${userInputs[0]} ! Skatos ,ka Tev ir  ${userInputs[1]} gadu, ${userInputs[3]} es jau ta ari domaju! ${userInputs[4]} </h2>`;

 // End of User Inputs
 alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  console.log(originalStory);
  document.write(originalStory);
