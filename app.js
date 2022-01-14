"use strict";
// the story with possible replacements
let originalStory =
  "Once upon a ${userInputs[0]}, there was a ${userInputs[1]} hearted, ${userInputs[3]} dragon that was so mean and ${userInputs[4]} ";

// how many questions
let numberOfQuestions = 4;
//what questions should appear
let questionArray = [
  "Enter name",
  "Enter something",
  "Enter noun",
  "Enter kartupelis",
];
//which question iam on
let questionCounter = 0;
//user inputs
let userInputs = [];

// console.log(`The "i" of  "for" loop `);
for (let i = numberOfQuestions; i >= 0; i--) {
  console.log(i);
  console.log(questionArray);
  //current "questionCounter" variable (it should go up)
  questionCounter++;
  console.log(questionCounter);
}
