import logo from './logo.svg';
import './App.css';
import WordPuzzle from './components/WordPuzzle';
import {Header} from './components/Header';
import {Footer} from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Header />
      <WordPuzzle/>
      <Footer />
    </div>
    </div>
  );
}

export default App;
