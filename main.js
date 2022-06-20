// function homeWork() {
//   mission1();
//   mission2();
// }
// function mission1() {
//   switch (+numFromUser.value) {
//     case 3:
//       console.log("hello");
//       return;
//     case 5:
//       console.log("goodbye");
//       return;
//     case 7:
//       console.log("thank you");
//       return;
//     default:
//       console.log("sike' thats the wrong number!!");
//   }
// }
// switchButton.addEventListener("click", homeWork);
// function mission2() {
//   switch (namesFromUser.value) {
//     case "jacob":
//       names.innerText = "jacob";
//       return;
//     case "nathan":
//       names.innerText = "NATHAN";
//       return;
//     case "DALYA":
//       names.innerText = "dalya";
//       return;
//     default:
//       names.innerText = "name doesn't exist";
//   }
// }
// function writeUserWord() {
//   userFinalText.style.color = userWordColor.value;
//   userFinalText.style.fontSize = +userWordSize.value + "px";
//   userFinalText.innerText = userText.value;
// }
// userTextButton.addEventListener("click", writeUserWord);

let btns = document.getElementsByClassName("btns");
for (let i of btns) {
  i.onclick = () => {
    if (i.innerText == "C") {
      answerInp.value=""
    } else if (i.innerText == "Backspace") {
      let theAnswer=answerInp.value
      theAnswer=theAnswer.substr(0,theAnswer.length-1)
      answerInp.value=theAnswer
    } else {
      answerInp.value += i.innerText;
    }
  };
}
equal.onclick =()=>{
  let firstNum = answerInp.value;
  let secondNum;
  let helper = answerInp.value;
  for (let i = 0; i < helper.length; i++) {
    switch (helper[i]) {
      case "+":
        secondNum = firstNum.slice(i + 1);
        answerInp.value = parseInt(firstNum) + parseInt(secondNum);
        return answerInp;
      case "-":
        secondNum = firstNum.slice(i + 1);
        answerInp.value = parseInt(firstNum) - parseInt(secondNum);
        return answerInp;
      case "*":
        secondNum = firstNum.slice(i + 1);
        answerInp.value = parseInt(firstNum) * parseInt(secondNum);
        return answerInp;
      case "/":
        secondNum = firstNum.slice(i + 1);
        answerInp.value = parseInt(firstNum) / parseInt(secondNum);
        return answerInp;
    }
  }
}
