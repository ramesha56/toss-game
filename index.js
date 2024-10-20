var userNumber = parseInt(prompt("Enter a number between 0 and 9:"));
var randomNumber = Math.floor(Math.random() * 10); 

console.log("User Number:", userNumber);  
console.log("Random Number:", randomNumber);  


if (userNumber >= 0 && userNumber <= 5) {
  if (randomNumber >= 0 && randomNumber <= 5) {
    alert("Head! You Win 🎉");
  } else {
    alert("Tail! You Lose 😢");
  }
} else if (userNumber >= 6 && userNumber <= 9) {
  if (randomNumber >= 0 && randomNumber <= 5) {
    alert("Tail! You Lose 😢");
  } else {
    alert("Head! You Win 🎉");
  }
} else {
  alert("Invalid input! Please enter a number between 0 and 9.");
}
