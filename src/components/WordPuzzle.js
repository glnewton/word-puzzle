import React, { useState } from "react";
import { matrix } from "../data";
import { Search } from "../utils/Search";
import { generateRandomLetterArray } from "../utils/generateRandomLetterArray";
import { Board } from "./Board";
import { SearchBar } from "./SearchBar";
import { ResultDisplay } from "./ResultDisplay";

const WordPuzzle = () => {
  const [searchWord, setSearchWord] = useState("");
  const [result, setResult] = useState(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [newMatrix, setNewMatrix] = useState(null);

  let searchWordInput = searchWord.toUpperCase();

  const handleSearch = () => {
    const wordSearchResult = Search(searchWordInput, newMatrix || matrix);
    setResult(wordSearchResult.result);
    setX(wordSearchResult.x);
    setY(wordSearchResult.y);
  };

  const handleInput = (e) => setSearchWord(e.target.value)

  const handleReset = () => {
    const letterArray = generateRandomLetterArray();
    setNewMatrix(letterArray);
    setSearchWord("");
  };



  return (
    <div>
      <SearchBar handleInput={handleInput} handleSearch={handleSearch} searchWord={searchWord}/>
      <ResultDisplay result={result} x={x} y={y}/>
      <Board matrix={newMatrix || matrix}/>
      <button onClick={handleReset} className="reset-button">Reset Board</button>
    </div>
  );
};

export default WordPuzzle;
