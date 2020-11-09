/* Validating username and Password using Logic Operators */

var username = "joe";
var password = "joe123";

// And
// &&
if (!username || !password) {
  console.log("Please provide username and password");
}

if (username === "joe" && password === "joe123") {
  console.log("Access granted");
} else {
  console.log("Username or password are incorrect");
}
