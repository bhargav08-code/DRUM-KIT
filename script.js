const totalPad = document.querySelectorAll(".pad").length;
for (let i = 0; i < totalPad; i++) {
  document.querySelectorAll(".pad")[i].addEventListener("click", function () {
    const btnforPad = this.innerHTML;
    makeSound(btnforPad);
  });
}

function makeSound(key) {
  switch (key) {
    case "A":
      var audio1 = new Audio("audio1.aac");
      audio1.play();
      break;

    case "S":
      var audio2 = new Audio("audio2.aac");
      audio2.play();
      break;

    case "D":
      var audio3 = new Audio("audio3.aac");
      audio3.play();
      break;

    case "F":
      var audio4 = new Audio("audio4.aac");
      audio4.play();
      break;

    case "G":
      var audio5 = new Audio("audio5.aac");
      audio5.play();
      break;

    case "H":
      var audio6 = new Audio("audio6.aac");
      audio6.play();
      break;

    case "J":
      var audio7 = new Audio("audio7.aac");
      audio7.play();
      break;

    case "K":
      var audio8 = new Audio("audio.aac");
      audio8.play();
      break;
    default:
      console.log("end");
  }
}
