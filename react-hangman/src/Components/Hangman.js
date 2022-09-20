import React, {useEffect, useState} from "react";
import Figure from "./Figure";

export default function Hangman(){
    // array of possible words
    const possibleWords = ["Aatrox"
        // , "Ahri", "Akali", "Alistar", "Amumu",
        // "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank",
        // "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "ChoGath", "Corki",
        // "Darius", "Jarvan IV", 	"Malphite", 	"Rumble",	"Twisted Fate", "Diana", 	"Jax",
        // "Malzahar", 	"Ryze", 	"Twitch", "Dr Mundo",	"Jayce", 	"Maokai", 	"Sejuani",
        // "Udyr", "Draven", "Jhin", 	"Master Yi", 	"Shaco", "Urgot",
        // "Ekko", 	"Jinx", 	"Miss Fortune", 	"Shen", 	"Varus",
        // "Elise", 	"Kalista", 	"Mordekaiser", 	"Shyvana", 	"Vayne",
        // "Evelynn", 	"Karma", 	"Morgana", 	"Singed", 	"Veigar",
        // "Ezreal", 	"Karthus", 	"Nami", 	"Sion", 	"Vel’Koz",
        // "Fiddlesticks", 	"Kassadin", 	"Nasus", 	"Sivir", 	"Vi",
        // "Fiora", 	"Katarina", 	"Nautilus", 	"Skarner", 	"Viktor",
        // "Fizz", 	"Kayle", 	"Nidalee", 	"Sona", 	"Vladimir",
        // "Galio", 	"Kennen", 	"Nocturne", 	"Soraka", 	"Volibear",
        // "Gangplank", 	"Kha’Zix", 	"Nunu", 	"Swain",	"Warwick",
        // "Garen", 	"Kindred", 	"Olaf", 	"Syndra", 	"Wukong",
        // "Gnar", 	"Kled", 	"Orianna", 	"Tahm Kench", 	"Xerath",
        // "Gragas", 	"Kog’Maw", 	"Pantheon", 	"Taliyah", 	"Xin Zhao",
        // "Graves", 	"LeBlanc", 	"Poppy", 	"Talon", 	"Yasuo",
        // "Hecarim",	"Lee Sin", 	"Quinn", 	"Taric", 	"Yorick",
        // "Heimerdinger",	"Leona",	"Rammus", 	"Teemo", 	"Zac",
        // "Illaoi", 	"Lissandra", 	"Rek’Sai", 	"Thresh", 	"Zed",
        // "Irelia", 	"Lucian",	"Renekton", 	"Tristana", 	"Ziggs",
        // "Ivern", 	"Lulu", 	"Rengar", 	"Trundle", 	"Zilean",
        // "Janna", 	"Lux", 	"Riven", 	"Tryndamere", 	"Zyra",    "Nilah"
    ];

    // setup states for variables
    const [correctGuesses, setCorrectGuesses] = useState([]);
    const [wrongGuesses, setWrongGuesses] = useState([]);
    const [outOfGuesses, setOutOfGuesses] = useState(false);
    //declare hidden word from array (possibleWords)
    const  solution = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase();
    console.log(solution);




    //check if letter is correct, wrong and not yet used and it is a letter key pressed in
    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;
            if (keyCode >= 65 && keyCode <= 90) {
                const letter = key.toUpperCase();
                if (solution.includes(letter)) {
                    if (!correctGuesses.includes(letter)) {
                        setCorrectGuesses([...correctGuesses, letter]);
                    }
                } else {
                    if (!wrongGuesses.includes(letter)) {
                        setWrongGuesses([...wrongGuesses, letter]);
                    }
                }
            }
        }
        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);
    }, [correctGuesses, wrongGuesses, solution]);

    //check if game is lost
    useEffect(() => {
        if (wrongGuesses.length === 6){
            setOutOfGuesses(true);
        }
        }, [wrongGuesses])


    //reload page after game by pressing play again
    function reload(){
        return <button className="playAgain" onClick={reloadPage}> Play again</button>;
    }
    function reloadPage(){
        window.location.reload();
    }

    //display correct guesses instead of '_'
    const hiddenWord = solution.split('').map(letter => correctGuesses.includes(letter)?letter : "_").join(" ");

    return(
        <div>
            <>
                <Figure wrongLetters={wrongGuesses}/>
            </>
            <p>
                {hiddenWord}
            </p>
            {outOfGuesses?<p>Game Over!!</p>:
            !hiddenWord.includes("_") && <p>You Won!</p>
            }
            {outOfGuesses || !hiddenWord.includes("_")? reload() : <></>}
        </div>

    )
}

