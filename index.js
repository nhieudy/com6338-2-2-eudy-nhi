//Greet Function
function greet(){
  let userName = prompt("What is your name?");
  alert("Hello, " + userName);
  let userAge = parseInt(prompt("How old are you?")); //Radix by default is 10
  let userAnswer = confirm("Did you have a birthday yet this year?"); //True for OK and False for Cancel
  let currentYear = new Date().getFullYear(); //Return vale: Int
  let userYear = 0;
  if(userAnswer){
    userYear = currentYear - userAge;
      alert("You were born in this year: " + userYear);
  }
  else{
    userYear = (currentYear - (userAge+1));
      alert("You were born in this year: " + userYear);
  }
}