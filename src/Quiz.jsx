import React from 'react'
import Question from './Question'

export default function Quiz() {
    const[questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
        .then((response) => response.json())
        .then((data) => setQuestions(data.results));
    }, [])
    console.log(questions)

    const questionElements = questions.map(question => {
        return <Question 

            />
    })

    return (
        <div>
            Heres my quiz
        </div>
    )
}