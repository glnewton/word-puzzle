



// export const search = (searchWordInput, matrix) => {

//     let searchResult = {
//         result: false,
//         x: null,
//         y: null
//     }
//     // Horizontal Search
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === searchWordInput[0]) {
//           let found = true;
//           for (let k = 0; k < searchWordInput.length; k++) {
//             if (matrix[i][j + k] !== searchWordInput[k]) {
//               found = false;
//               break;
//             }
//           }
//           if (found) {
//             searchResult.result =true;
//             searchResult.x = i;
//             searchResult.y = j;
//           }
//           }
//         }
//       }
//     // Horizontal Search -- Rerverse
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = matrix[i].length - 1; j >= 0; j--) {
//         if (matrix[i][j] === searchWordInput[0]) {
//           let found = true;
//           for (let k = 0; k < searchWordInput.length; k++) {
//             if (matrix[i][j - k] !== searchWordInput[k]) {
//               found = false;
//               break;
//             }
//           }
//           if (found) {
//             searchResult.result =true;
//             searchResult.x = i;
//             searchResult.y = j;
//           }
  
//         }
//       }
//     }
//     // Vertical Search
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === searchWordInput[0] && matrix[i + searchWordInput.length - 1]) {
//           let found = true;
//           for (let k = 0; k < searchWordInput.length; k++) {
//             if (matrix[i + k][j] !== searchWordInput[k]) {
//               found = false;
//               break;
//             }
//           }
//           if (found) {
//             searchResult.result =true;
//             searchResult.x = i;
//             searchResult.y = j;
//             console.log(`Found Vertically at ${searchResult.x}, ${searchResult.y}`)

//           }

//         }
//       }
//     }
//     // Diagonal Search Top Left to Bottom Right

//     // I = Current Submatrix in which the first letter letter is found (X)
//     // J = Current position in the submatrix (Pointer) (Y)
//     // K = Current position in the searchWordInput (Pointer)
//     for (let i = 0; i < matrix.length; i++) {
//       console.log(`matrix[i] = ${matrix[i]}`)
//       for (let j = 0; j < matrix[i].length; j++) {
//         console.log(`matrix[i][j] = ${matrix[i][j]}`)
//         if (matrix[i][j] === searchWordInput[0]) {
//           let found = true;
//           for (let k = 0; k < searchWordInput.length; k++) {
//             if ((matrix[i + k][j + k] !== searchWordInput[k])) {
//               found = false;
//               break;
//             }
//           }
//           if (found) {
//             searchResult.result =true;
//             searchResult.x = i;
//             searchResult.y = j;
//             console.log(`Found Diagonally(Top Left to Bottom Right) at ${i}, ${j}`) 
//           }
//         }
//       }
//     }
//     // Diagonal Search Top Right to Bottom Left
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = matrix[i].length - 1; j >= 0; j--) {
//         if (matrix[i][j] === searchWordInput[0]) {
//           let found = true;
//           for (let k = 0; k < searchWordInput.length; k++) {
//             if (matrix[i + k][j - k] !== searchWordInput[k]) {
//               found = false;
//               break;
//             }
//           }
//           if (found) {
//             searchResult.result=true;
//             searchResult.x = i;
//             searchResult.y = j;
//             console.log(`Found Diagonally(Top Right to Bottom Left) at ${i}, ${j}`)

//           }
//         }
//       }
//     }
//     // Diagonal Search Bottom Left to Top Right
//     // for (let i = matrix.length - 1; i >= 0; i--) {
//     //   for (let j = 0; j < matrix[i].length; j++) {
//     //     if (matrix[i][j] === searchWordInput[0]) {
//     //       let found = true;
//     //       for (let k = 0; k < searchWordInput.length; k++) {
//     //         if (matrix[i - k][j + k] !== searchWordInput[k]) {
//     //           found = false;
//     //           break;
//     //         }
//     //       }
//     //       if (found) {
//     //         setResult(true);
//     //         setX(i);
//     //         setY(j);
//     //         return;
//     //       }
//     //     }
//     //   }
//     // }
//     return searchResult;
//   };

export const search = (searchWordInput, matrix) => {
  let searchResult = {
      result: false,
      x: null,
      y: null
  }

  // Preprocess search word
  const searchWordLength = searchWordInput.length;
  //const searchWordHash = createHashMap(searchWordInput);

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
