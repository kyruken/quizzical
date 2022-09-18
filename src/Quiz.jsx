import React from 'react'

export default function Quiz() {
    const[questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
        .then((response) => response.json())
        .then((data) => setQuestions(data.results));
    }, [])

    return (
        <div>
            Heres my quiz
        </div>
    )
}