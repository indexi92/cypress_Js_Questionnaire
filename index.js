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

// Modifications visuelles
responseOneQ1.addEventListener("mouseover", () => {
  responseOneQ1.style.color = "#8c8e91";
  responseOneQ1.style.textDecoration = "underline";
  responseOneQ1.style.fontWeight = "bolder";
  responseOneQ1.style.textTransform = "uppercase";
});
responseOneQ1.addEventListener("mouseout", () => {
  responseOneQ1.style.color = "";
  responseOneQ1.style.textDecoration = "";
  responseOneQ1.style.fontWeight = "";
  responseOneQ1.style.textTransform = "";
});
responseTwoQ1.addEventListener("mouseover", () => {
  responseTwoQ1.style.color = "#8c8e91";
  responseTwoQ1.style.textDecoration = "underline";
  responseTwoQ1.style.fontWeight = "bolder";
  responseTwoQ1.style.textTransform = "uppercase";
});
responseTwoQ1.addEventListener("mouseout", () => {
  responseTwoQ1.style.color = "";
  responseTwoQ1.style.textDecoration = "";
  responseTwoQ1.style.fontWeight = "";
  responseTwoQ1.style.textTransform = "";
});
responseThreeQ1.addEventListener("mouseover", () => {
  responseThreeQ1.style.color = "#8c8e91";
  responseThreeQ1.style.textDecoration = "underline";
  responseThreeQ1.style.fontWeight = "bolder";
  responseThreeQ1.style.textTransform = "uppercase";
});
responseThreeQ1.addEventListener("mouseout", () => {
  responseThreeQ1.style.color = "";
  responseThreeQ1.style.textDecoration = "";
  responseThreeQ1.style.fontWeight = "";
  responseThreeQ1.style.textTransform = "";
});
responseOneQ2.addEventListener("mouseover", () => {
  responseOneQ2.style.color = "#8c8e91";
  responseOneQ2.style.textDecoration = "underline";
  responseOneQ2.style.fontWeight = "bolder";
  responseOneQ2.style.textTransform = "uppercase";
});
responseOneQ2.addEventListener("mouseout", () => {
  responseOneQ2.style.color = "";
  responseOneQ2.style.textDecoration = "";
  responseOneQ2.style.fontWeight = "";
  responseOneQ2.style.textTransform = "";
});
responseTwoQ2.addEventListener("mouseover", () => {
  responseTwoQ2.style.color = "#8c8e91";
  responseTwoQ2.style.textDecoration = "underline";
  responseTwoQ2.style.fontWeight = "bolder";
  responseTwoQ2.style.textTransform = "uppercase";
});
responseTwoQ2.addEventListener("mouseout", () => {
  responseTwoQ2.style.color = "";
  responseTwoQ2.style.textDecoration = "";
  responseTwoQ2.style.fontWeight = "";
  responseTwoQ2.style.textTransform = "";
});
responseThreeQ2.addEventListener("mouseover", () => {
  responseThreeQ2.style.color = "#8c8e91";
  responseThreeQ2.style.textDecoration = "underline";
  responseThreeQ2.style.fontWeight = "bolder";
  responseThreeQ2.style.textTransform = "uppercase";
});
responseThreeQ2.addEventListener("mouseout", () => {
  responseThreeQ2.style.color = "";
  responseThreeQ2.style.textDecoration = "";
  responseThreeQ2.style.fontWeight = "";
  responseThreeQ2.style.textTransform = "";
});
responseForQ2.addEventListener("mouseover", () => {
  responseForQ2.style.color = "#8c8e91";
  responseForQ2.style.textDecoration = "underline";
  responseForQ2.style.fontWeight = "bolder";
  responseForQ2.style.textTransform = "uppercase";
});
responseForQ2.addEventListener("mouseout", () => {
  responseForQ2.style.color = "";
  responseForQ2.style.textDecoration = "";
  responseForQ2.style.fontWeight = "";
  responseForQ2.style.textTransform = "";
});

// Fonction du questionnaire

const questionnaire = {
  q1:"Quel célèbre dictateur dirigea l’URSS du milieu des années 1920 à 1953 ?",
  r1: "Staline"
  q1:"Quels joueurs ont joué pour les Chicago Bulls ?",
  r1:"Jordan" && "Pippen",

  rep: function(){
    let nbrep = 0;
    for(let i=0; i<questionOne.length; i +=1) {
      let repUser = alert(qS[i].q1)
      if ()
    }
    
  }

}


validationBtn.addEventListener("click", questionnaire.r1);
