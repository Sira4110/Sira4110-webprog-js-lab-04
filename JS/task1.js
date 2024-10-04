function generatePassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

console.log(generatePassword(8)); // Наприклад: "f8G7cB2d"
console.log(generatePassword(12)); // Наприклад: "A9c7J3m2K5pR"
