import React from 'react'

const Figure = ({ wrongLetters }) => {
    const errors = wrongLetters.length;
    return (
        <svg version="1.1" height="400" width="500" preserveAspectRatio="xMinYMin meet" className="figure-container">
            <rect fill="#053544" width="10" height="400" x="20" y="0" className="base" />
            <rect fill="#053544" width="300" height="10" x="20" y="0" className="base" />
            <rect fill="#053544" width="300" height="10" x="0" y="400" className="base" />
            <line x1="290" y1 = "0" x2="290" y2 = "120" stroke = "black" />
            {errors > 0 ? <circle cx="290" cy="150" r="30" className="figurepart"/> : null}
            {errors > 1 ? <rect width="10" height="100" x="285" y="150" className="figurepart"/>:null}
            {errors > 2 ? <line x1="290" y1="200" x2="260" y2="230" stroke="orange" strokeLinecap="round" strokeWidth="10"/>:null}
            {errors > 3 ? <line x1="290" y1="200" x2="320" y2="230" stroke="orange" strokeLinecap="round" strokeWidth="10"/>:null}
            {errors > 4 ? <line x1="290" y1="250" x2="260" y2="300" stroke="orange" strokeLinecap="round" strokeWidth="10"/>:null}
            {errors > 5 ? <line x1="290" y1="250" x2="320" y2="300" strokeLinecap="round" stroke="orange" strokeWidth="10"/>:null}
        </svg>
    )
}

export default Figure