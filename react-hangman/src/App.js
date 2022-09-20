import './App.css';
import Hangman from "./Components/Hangman";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
    return (
        <>
            <Header/>
            <div className="App">
                <div className="gameContainer">
                    <Hangman/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default App;
