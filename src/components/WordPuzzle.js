import React, { useState } from "react";
import { matrix } from "../data";
import { search } from "../utils/Search";
import { Board } from "./Board";
import { SearchBar } from "./SearchBar";
import { ResultDisplay } from "./ResultDisplay";

const WordPuzzle = () => {
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  let searchWordInput = searchWord.toUpperCase();

  const handleSearch = () => {
    const wordSearchResult = search(searchWordInput, matrix);
    setResult(wordSearchResult.result);
    setX(wordSearchResult.x);
    setY(wordSearchResult.y);
  };

  const handleInput = (e) => setSearchWord(e.target.value)

  // const search = () => {
  //   // Horizontal Search
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let j = 0; j < matrix[i].length; j++) {
  //       if (matrix[i][j] === searchWordInput[0]) {
  //         let found = true;
  //         for (let k = 0; k < searchWordInput.length; k++) {
  //           if (matrix[i][j + k] !== searchWordInput[k]) {
  //             found = false;
  //             break;
  //           }
  //         }
  //         if (found) {
  //           setResult(true);
  //           setX(i);
  //           setY(j);
  //           return;
  //         }
  //       }
  //     }
  //   }
  //   // Horizontal Search -- Rerverse
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let j = matrix[i].length - 1; j >= 0; j--) {
  //       if (matrix[i][j] === searchWordInput[0]) {
  //         let found = true;
  //         for (let k = 0; k < searchWordInput.length; k++) {
  //           if (matrix[i][j - k] !== searchWordInput[k]) {
  //             found = false;
  //             break;
  //           }
  //         }
  //         if (found) {
  //           setResult(true);
  //           setX(i);
  //           setY(j);
  //           return;
  //         }
  //       }
  //     }
  //   }
  //   // Vertical Search
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let j = 0; j < matrix[i].length; j++) {
  //       if (matrix[i][j] === searchWordInput[0] && matrix[i + searchWordInput.length - 1]) {
  //         let found = true;
  //         for (let k = 0; k < searchWordInput.length; k++) {
  //           if (matrix[i + k][j] !== searchWordInput[k]) {
  //             found = false;
  //             break;
  //           }
  //         }
  //         if (found) {
  //           setResult(true);
  //           setX(i);
  //           setY(j);
  //           console.log(`Found Vertically at ${x}, ${y}`)
  //           return;
  //         }
  //       }
  //     }
  //   }
  //   // Diagonal Search Top Left to Bottom Right

  //   // I = Current Submatrix in which the first letter letter is found (X)
  //   // J = Current position in the submatrix (Pointer) (Y)
  //   // K = Current position in the searchWordInput (Pointer)
  //   for (let i = 0; i < matrix.length; i++) {
  //     console.log(`matrix[i] = ${matrix[i]}`)
  //     for (let j = 0; j < matrix[i].length; j++) {
  //       console.log(`matrix[i][j] = ${matrix[i][j]}`)
  //       if (matrix[i][j] === searchWordInput[0]) {
  //         let found = true;
  //         for (let k = 0; k < searchWordInput.length; k++) {
  //           if ((matrix[i + k][j + k] !== searchWordInput[k])) {
  //             found = false;
  //             break;
  //           }
  //         }
  //         if (found) {
  //           setResult(true);
  //           setX(i);
  //           setY(j);
  //           console.log(`Found Diagonally(Top Left to Bottom Right) at ${i}, ${j}`)
  //           return;
  //         }
  //       }
  //     }
  //   }
  //   // Diagonal Search Top Right to Bottom Left
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let j = matrix[i].length - 1; j >= 0; j--) {
  //       if (matrix[i][j] === searchWordInput[0]) {
  //         let found = true;
  //         for (let k = 0; k < searchWordInput.length; k++) {
  //           if (matrix[i + k][j - k] !== searchWordInput[k]) {
  //             found = false;
  //             break;
  //           }
  //         }
  //         if (found) {
  //           setResult(true);
  //           setX(i);
  //           setY(j);
  //           console.log(`Found Diagonally(Top Right to Bottom Left) at ${i}, ${j}`)
  //           return;
  //         }
  //       }
  //     }
  //   }
  //   // Diagonal Search Bottom Left to Top Right
  //   // for (let i = matrix.length - 1; i >= 0; i--) {
  //   //   for (let j = 0; j < matrix[i].length; j++) {
  //   //     if (matrix[i][j] === searchWordInput[0]) {
  //   //       let found = true;
  //   //       for (let k = 0; k < searchWordInput.length; k++) {
  //   //         if (matrix[i - k][j + k] !== searchWordInput[k]) {
  //   //           found = false;
  //   //           break;
  //   //         }
  //   //       }
  //   //       if (found) {
  //   //         setResult(true);
  //   //         setX(i);
  //   //         setY(j);
  //   //         return;
  //   //       }
  //   //     }
  //   //   }
  //   // }

  // setResult(false);

  // };

  return (
    <div>
      <SearchBar handleInput={handleInput} handleSearch={handleSearch} searchWord={searchWord}/>
      <ResultDisplay result={result} x={x} y={y}/>
      <Board matrix={matrix}/>
    </div>
  );
};

export default WordPuzzle;
