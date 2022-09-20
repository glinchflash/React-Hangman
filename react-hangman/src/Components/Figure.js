import React from 'react'

const Figure = ({ wrongLetters }) => {
    const errors = wrongLetters.length;
    return (
        <svg version="1.1" height="320" width="500" preserveAspectRatio="xMinYMin meet" className="figure-container">
            <rect fill="#053544" width="10" height="400" x="20" y="0" className="base" />
            <rect fill="#053544" width="300" height="10" x="20" y="0" className="base" />
            <rect fill="#053544" width="300" height="10" x="0" y="400" className="base" />
            <line x1="290" y1 = "0" x2="290" y2 = "100" stroke = "black" />
            <rect fill="black" width="200" height="10" x="0" y="310" />
            {errors > 0 ? <circle cx="290" cy="125" r="30" className="figurepart"/> : null}
            {errors > 1 ? <rect width="10" height="100" x="285" y="120" className="figurepart"/>:null}
            {errors > 2 ? <line x1="290" y1="180" x2="260" y2="210" stroke="orange" strokeLinecap="round" strokeWidth="10"/>:null}
            {errors > 3 ? <line x1="290" y1="180" x2="320" y2="210" stroke="orange" strokeLinecap="round" strokeWidth="10"/>:null}
            {errors > 4 ? <line x1="290" y1="220" x2="260" y2="280" stroke="orange" strokeLinecap="round" strokeWidth="10"/>:null}
            {errors > 5 ? <line x1="290" y1="220" x2="320" y2="280" strokeLinecap="round" stroke="orange" strokeWidth="10"/>:null}
        </svg>
    )
}

export default Figure