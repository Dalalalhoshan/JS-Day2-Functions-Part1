function printName() {
  console.log("Dalal AlHoshan");
}

function printAge(birthYear) {
  console.log(`Age is ${2024 - birthYear}`);
}

function printAgeAndName(name, language) {
  if (language == "en") {
    console.log(`Hello ${name}`);
  } else if (language == "es") {
    console.log(`Hola ${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language == "tr") {
    console.log(`Merhaba ${name}`);
  }
}

function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1}`);
  } else console.log(`${num2}`);
}

function taskFourInSwitch(name, language) {
  switch (language) {
    case "en":
      console.log(`hello ${name}`);
      break;
    case "es":
      console.log(`Hola ${name}`);
      break;
    case "fr":
      console.log(`Bonjour$ {name}`);
      break;
    case "tr":
      console.log(`Merhaba ${name}`);
      break;
  }
}

printName();

printAge(1997);

printAgeAndName("Dalal", "tr");

printMax(3, 10);

taskFourInSwitch("Dalal", "tr");
