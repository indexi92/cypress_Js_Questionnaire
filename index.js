// Variables titres
var title = document.getElementById("title");
var questionOne = document.getElementById("questionOne");
var questionTwo = document.getElementById("questionTwo");
// Variables question 1
var responseOneQ1 = document.getElementById("responseOneQ1");
var responseTwoQ1 = document.getElementById("responseTwoQ1");
var responseThreeQ1 = document.getElementById("responseThreeQ1");
// Variables question 2
var responseOneQ2 = document.getElementById("responseOneQ2");
var responseTwoQ2 = document.getElementById("responseTwoQ2");
var responseThreeQ2 = document.getElementById("responseThreeQ2");
var responseForQ2 = document.getElementById("responseForQ2");
// Variable bouton
var validationBtn = document.getElementById("validationBtn");

// Fonction du Questionnaire
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

function score() {
  var result = 0;
  if (responseOneQ1.checked) {
    result++;
  } 
  if (responseOneQ2.checked || responseForQ2.checked) {
    result++;
  } 
  if (result = 3) {
    alert ("Bonne reponse");
}else{
  alert ("Mauvaise Reponse");
};

submitBtn.addEventListener("click", score);

// submitBtn.addEventListener("click", function () {
//   let result = 0;
//   // Si Staline est chécké ==> result ++
//   // Sinon afficher le message de reponse erronné
//   if (responseOneQ1.checked) {
//     result++;
//     alert("Bonne Réponse")
//   }else{
//     alert("Mauvaise Réponse")
//   };
// //   // Si Jordan et Pippen sont checké ==> result ++
// //   // Sinon afficher le message de reponse erronné
// //   if (responseOneQ2.checked || responseForQ2.checked) {
// //     result++;
// //   };
// //   // Si result = 3 ==> Bravo quiz bon travail
// //   if (result = 3) {
// //     alert("Bravo")
// //   };
