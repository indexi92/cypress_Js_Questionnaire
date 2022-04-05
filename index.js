// Variables titres
let title = document.getElementById("title");
let questionOne = document.getElementById("questionOne");
let questionTwo = document.getElementById("questionTwo");
// Variables question 1
let responseOneQ1 = document.getElementById("responseOneQ1");
let responseTwoQ1 = document.getElementById("responseTwoQ1");
let responseThreeQ1 = document.getElementById("responseThreeQ1");
// Variables question 2
let responseOneQ2 = document.getElementById("responseOneQ2");
let responseTwoQ2 = document.getElementById("responseTwoQ2");
let responseThreeQ2 = document.getElementById("responseThreeQ2");
let responseForQ2 = document.getElementById("responseForQ2");
// Variable bouton
let validationBtn = document.getElementById("validationBtn");
[
  responseOneQ1,
  responseTwoQ1,
  responseThreeQ1,
  responseOneQ2,
  responseTwoQ2,
  responseThreeQ2,
  responseForQ2,
].forEach((response) => {
  response.addEventListener("mouseover", (ev) => {
    ev.currentTarget.style.color = "#8c8e91";
    ev.currentTarget.style.textDecoration = "underline";
    ev.currentTarget.style.fontWeight = "bolder";
    ev.currentTarget.style.textTransform = "uppercase";
  });
  response.addEventListener("mouseout", (ev) => {
    ev.currentTarget.style.color = "";
    ev.currentTarget.style.textDecoration = "";
    ev.currentTarget.style.fontWeight = "";
    ev.currentTarget.style.textTransform = "";
  });
});

let submitBtn = document.getElementById("validationBtn");

submitBtn.addEventListener("click", function () {
  let result = 0;
  // Si Staline est chécké ==> result ++
  // Sinon afficher le message de reponse erronné

  // Si Jordan et Pippen sont checké ==> result ++
  // Sinon afficher le message de reponse erronné

  // Si result = 3 ==> Bravo quiz bon travail
});

/* 
const quiz = [
  {
    question:
      "Quel célèbre dictateur dirigea l’URSS du milieu des années 1920 à 1953 ?",
    reponses: [
      {
        response: "Staline",
        isValid: true,
      },
      {
        response: "Trotski",
        isValid: false,
      },
      {
        response: "Lénine",
        isValid: false,
      },
    ],
  },
  {
    question: "Quels joueurs ont joué pour les Chicago Bulls ?",
    reponses: [
      {
        response: "Jordan",
        isValid: true,
      },
      {
        response: "Stockton",
        isValid: false,
      },
      {
        response: "O'Neal",
        isValid: false,
      },
      {
        response: "Pippen",
        isValid: true,
      },
    ],
  },
];


quiz.forEach( (question, index) => {
  let question = document.createElement('div')
  question
}) */
