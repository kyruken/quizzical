import React from 'react'

export default function Quiz() {
    fetch('https://opentdb.com/api.php?amount=5')
    .then((response) => response.json())
    .then((data) => console.log(data));
    return (
        <div>
            Heres my quiz
        </div>
    )
}