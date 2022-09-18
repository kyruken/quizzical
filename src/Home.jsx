import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
    <div className="start-quiz">
        <h1>Quizzical</h1>
        <p>Answer these 5 questions!</p>
        <Link to='/Quiz'><button>Start quiz</button></Link>
    </div>
)
}