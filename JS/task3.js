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

function checkPassword(password, confirmPassword) {
  return password === confirmPassword
    ? "Passwords match"
    : "Passwords do not match";
}

function isValidPassword(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  return hasUpper && hasLower && hasDigit;
}

function generateAndCheckPassword(length = 8) {
  let password;

  const useGenerated = confirm(
    "Would you like to generate a password? Click 'Cancel' to enter your own."
  );

  if (useGenerated) {
    password = generatePassword(length);
    if (confirm("Would you like to see the generated password?")) {
      alert(`Generated password: ${password}`);
    }
  } else {
    password = prompt("Enter your own password:");
  }

  while (!isValidPassword(password)) {
    alert(
      "Password does not meet the requirements: it must contain at least one uppercase letter, one lowercase letter, and one number."
    );
    const retry = confirm("Would you like to generate a new password?");
    if (retry) {
      password = generatePassword(length);
      if (confirm("Would you like to see the generated password?")) {
        alert(`Generated password: ${password}`);
      }
    } else {
      password = prompt("Enter a valid password:");
    }
  }

  const userPassword = prompt("Enter your password to check:");
  const message = checkPassword(password, userPassword);
  alert(message);
}

generateAndCheckPassword(8);
