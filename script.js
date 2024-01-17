function convertToOctal() {
  let input = document.getElementById("permissionString").value;
  let output = document.getElementById("output");

  // Validate and fix input if necessary
  input = validateAndFixInput(input);

  let octalValue = permissionStringToOctal(input);
  output.textContent = `Octal Representation: ${octalValue}`;
}

function permissionStringToOctal(str) {
  let permissions = {
    r: 4,
    w: 2,
    x: 1,
    "-": 0,
  };

  let octal = "";
  for (let i = 0; i < str.length; i += 3) {
    let part = str.slice(i, i + 3);
    let sum = part.split("").reduce((acc, char) => acc + permissions[char], 0);
    octal += sum;
  }
  return octal;
}

function validateAndFixInput(input) {
  input = input.trim();
  // Fix the input length to 9 characters, filling with '-' if too short
  input = input.padEnd(9, "-");
  // Replace any invalid character with '-'
  input = input.replace(/[^rwx-]/g, "-");
  return input;
}

// Event listener for enter key in input field
document
  .getElementById("permissionString")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      convertToOctal();
    }
  });
