export const generateRandomLetterArray = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // Create a 7x7 array of empty strings
    const randomLetterArray = Array.from({length: 7}, () => Array(7).fill(''));
    // Fill the array with random letters
    randomLetterArray.forEach((row) => {
      row.forEach((_, index) => {
        row[index] = letters[Math.floor(Math.random() * letters.length)];
      });
    });
    return randomLetterArray;
  };