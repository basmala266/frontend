
let number = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== number) {
  guess = Number(prompt("Guess a number between 1 and 10"));

  if (guess === number) {
    alert("Correct!");
  } else {
    alert("Wrong, try again.");
  }
}




let shape = "rectangle"; 

if (shape === "rectangle") {
  let length = 5;
  let width = 3;
  let area = length * width;
  console.log("Area = " + area);
}

if (shape === "circle") {
  let radius = 4;
  let area = 3.14 * radius * radius;
  console.log("Area = " + area);
}