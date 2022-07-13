// 1.Declare a boolean variable named isDog. Write code that prints a sentence to the console depending on the value of dog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

const isDog = "Dog";

if (true) {
  console.log("01:", isDog == "Dog" ? "pat, pat" : "false");
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------"
);
// 2.Declare 2 variables named speedLimit and yourSpeed. Assign speedLimit to 50km/h. If yourSpeed is above that, this sentence 'you're going too fast!' should be printed. If speed is lower than speedLimit, this sentence 'You're driving below the speed limit, Oma' should be printed.

const speedLimit = 50;
const yourSpeed = 75;

if (yourSpeed > speedLimit) {
  console.log("02:You're going too fast");
} else {
  console.log("02: Youŕe driving below the speed limit, Oma");
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------"
);

// 3.Declare a variable named age. Write code that prints a sentence to the console depending on the age value. If age is below 16, "serve butter beer" should be printed. Otherwise "serve beer".

const age = 33;

if (age < 16) {
  console.log("03:Serve butter beer");
} else {
  console.log("03: Serve beer");
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------"
);

// 4.Declare a variable named isStudent. Write code that prints a sentence to the console depending on the variable's valuue. If true, "Ticket costs €5,00" should be printed. If false, "Ticket costs €12,00".

const isStudent = true;

switch (true) {
  case isStudent === true:
    console.log("04:Ticket costs €5.00");
    break;

  default:
    console.log("04: Ticket costs €12.00");
    break;
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------"
);

// 5.Declare a variable named okMarie. write code that checks if the value of the variable is 'cake' - if so, "Let them eat cake" should be printed. If not, "Oh, bother".

const okMarie = "Oh, bother";

if (okMarie === "cake") {
  console.log("Let them eat cake");
} else {
  console.log("05:", okMarie);
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------"
);

// 6.Check if the following numbers are even numbers. Use a ternary and if the number is even e.g. 30. 30 is even should be printed, else e.g. 31: 31 is odd

const num1 = 30,
  num2 = 939,
  num3 = 40.9;

switch (true) {
  case num1 % 2 == 0:
    console.log("06:", num1, "is an even number");
    break;
  case num2 % 2 == 0:
    console.log("06", num2, "is an odd number");
    break;
  case num3 % 2 == 0:
    console.log("06", num3, "is an odd number");
    break;
  default:
    console.log("06: I don't know");
    break;
}

console.log(
  "-----------------------------------------------------------------------------------------------------------------"
);
