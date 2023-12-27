// Function to chop a string into chunks of a specified size
function stringChop(str, size) {
  // Check if the input string is null
  if (str === null) {
    return [];
  }

  // Initialize an empty array to store the chunks
  const result = [];

  // Loop through the string and create chunks of the specified length
  for (let i = 0; i < str.length; i += size) {
    // Use substring to get the chunk of the specified length
    const chunk = str.substring(i, i + size);
    result.push(chunk);
  }

  return result;
}

// Prompt the user for input
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");

// Display the result using alert
alert(stringChop(str, size));