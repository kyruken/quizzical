import React from 'react'
import './App.css'
import Home from './Home'
import Quiz from './Quiz'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {

  //When we click start quiz, render a new page to the screen
  //Put away start-page

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Quiz' element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
