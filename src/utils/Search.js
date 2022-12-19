export const Search = (searchWordInput, matrix) => {
  let searchResult = {
      result: false,
      x: null,
      y: null
  }
  // Preprocess search word
  const searchWordLength = searchWordInput.length;
  // Horizontal Search
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === searchWordInput[0] && j + searchWordLength <= matrix[i].length) {
        let found = true;
        for (let k = 0; k < searchWordLength; k++) {
          if (matrix[i][j + k] !== searchWordInput[k]) {
            found = false;
            break;
          }
        }
        if (found) {
          searchResult.result = true;
          searchResult.x = i;
          searchResult.y = j;
          return searchResult;
        }
      }
    }
  }
  // Horizontal Search -- Reverse
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][j] === searchWordInput[0] && j - searchWordLength >= 0) {
        let found = true;
        for (let k = 0; k < searchWordLength; k++) {
          if (matrix[i][j - k] !== searchWordInput[k]) {
            found = false;
            break;
          }
        }
        if (found) {
          searchResult.result = true;
          searchResult.x = i;
          searchResult.y = j;
          return searchResult;
        }
      }
    }
  }
  // Vertical Search
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === searchWordInput[0] && i + searchWordLength <= matrix.length && i + searchWordLength >= 0) {
        let found = true;
        for (let k = 0; k < searchWordLength; k++) {
          if (matrix[i + k][j] !== searchWordInput[k]) {
            found = false;
            break;
          }
        }
        if (found) {
          searchResult.result = true;
          searchResult.x = i;
          searchResult.y = j;
          return searchResult;
        }
      }
    }
  }
  // Diagonal Search Top Left to Bottom Right
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === searchWordInput[0] && i + searchWordLength <= matrix.length && i + searchWordLength >= 0 && j + searchWordLength <= matrix[i].length) {
        let found = true;
        for (let k = 0; k < searchWordLength; k++) {
          if (matrix[i + k][j + k] !== searchWordInput[k]) {
            found = false;
            break;
          }
        }
        if (found) {
          searchResult.result = true;
          searchResult.x = i;
          searchResult.y = j;
          return searchResult;
        }
      }
    }
  }
  // Diagonal Search Top Right to Bottom Left
  for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][j] === searchWordInput[0] && i + searchWordLength <= matrix.length && i + searchWordLength >= 0 && j - searchWordLength >= 0) {
        let found = true;
        for (let k = 0; k < searchWordLength; k++) {
          if (matrix[i + k][j - k] !== searchWordInput[k]) {
            found = false;
            break;
          }
        }
        if (found) {
          searchResult.result = true;
          searchResult.x = i;
          searchResult.y = j;
          return searchResult;
        }
      }
    }
  }
  // Diagonal Search Bottom Left to Top Right
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === searchWordInput[0] && i - searchWordLength >= 0 && i - searchWordLength < matrix.length && j + searchWordLength <= matrix[i].length) {
        let found = true;
        for (let k = 0; k < searchWordLength; k++) {
          if (matrix[i - k][j + k] !== searchWordInput[k]) {
            found = false;
            break;
          }
        }
        if (found) {
          searchResult.result = true;
          searchResult.x = i;
          searchResult.y = j;
          return searchResult;
        }
      }
    }
  }
  // Diagonal Search Bottom Right to Top Left
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][j] === searchWordInput[0] && i - searchWordLength >= 0 && i - searchWordLength < matrix.length && j - searchWordLength >= 0) {
        let found = true;
        for (let k = 0; k < searchWordLength; k++) {
          if (matrix[i - k][j - k] !== searchWordInput[k]) {
            found = false;
            break;
          }
        }
        if (found) {
          searchResult.result = true;
          searchResult.x = i;
          searchResult.y = j;
          return searchResult;
        }
      }
    }
  }
  return searchResult;
};
