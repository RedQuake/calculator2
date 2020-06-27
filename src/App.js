import React from 'react'
import './App.css'
import {useState} from 'react'

const App = () => {
  const [userInput, setUserInput] = useState('')
  const onClickHandler = () => {
    setUserInput(userInput + '7')
  }

  return <div className='container'>
    <h1>Calculator</h1>
<div className='userInput'>{userInput}</div>
    <div className='box'>
      <button onClick={onClickHandler}>7</button>
      <button>8</button>
      <button>9</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>.</button>
      <button>0</button>
      <button>=</button>
      <button>/</button>
            
    </div>
  </div>
}

export default App