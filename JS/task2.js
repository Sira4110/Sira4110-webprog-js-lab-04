function checkPassword(password, confirmPassword) {
  if (password === confirmPassword) {
    return "Passwords match";
  } else {
    return "Passwords do not match";
  }
}

console.log(checkPassword("f8G7cB2d", "f8G7cB2d")); // "Passwords match"
console.log(checkPassword("A9c7J3m2K5pR", "A9c7J3m2")); // "Passwords do not match"
console.log(checkPassword("abc123", "abc123")); // "Passwords match"
console.log(checkPassword("12345678", "87654321")); // "Passwords do not match"
