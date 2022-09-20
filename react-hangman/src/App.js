import './App.css';
import Hangman from "./Components/Hangman";
import Header from "./Components/Header";



function App() {
    return (
        <>
            <Header/>
            <div className="App">
                <div className="gameContainer">
                    <Hangman/>
                </div>
            </div>
        </>
    );
}

export default App;
