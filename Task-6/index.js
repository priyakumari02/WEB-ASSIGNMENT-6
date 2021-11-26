function Person(fName, lName, address) {
  this.firstName = fName;
  this.lastName = lName;
  this.address = address;
}

const person1 = new Person("Nand", "Kishor", "Hyderabad,Telangana");
const person2 = new Person("Rita", "Devi", "New York,USA");
const person3 = new Person("Priya", "Kumari", "Silicon Valley,California");

function Display_Properties1() {
  console.log("Person 1 : " + "\n");
  console.log(
    "First Name - " +
      person1.firstName +
      "\n" +
      "Last Name- " +
      person1.lastName +
      "\n" +
      "Office Address - " +
      person1.address +
      "\n"
  );
}

function Display_Properties2() {
  console.log("Person 2 : \n");
  console.log(
    "First Name - " +
      person2.firstName +
      "\n" +
      "Last Name- " +
      person2.lastName +
      "\n" +
      "Office Address - " +
      person2.address +
      "\n"
  );
}

function Display_Properties3() {
  console.log("Person 3 : \n");
  console.log(
    "First Name - " +
      person3.firstName +
      "\n" +
      "Last Name- " +
      person3.lastName +
      "\n" +
      "Office Address - " +
      person3.address +
      "\n"
  );
}

Display_Properties1();
Display_Properties2();
Display_Properties3();

function toggleHide1() {
  let btn = document.getElementById("btn");
  let para = document.getElementById("para1");
  if (para.style.display != "none") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
}

function toggleHide2() {
  let btn = document.getElementById("btn");
  let para = document.getElementById("para2");
  if (para.style.display != "none") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
}

function toggleHide3() {
  let btn = document.getElementById("btn");
  let para = document.getElementById("para3");
  if (para.style.display != "none") {
    para.style.display = "none";
  } else {
    para.style.display = "block";
  }
}
