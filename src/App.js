import './App.css'
import Board from './components/Board'
import ColorPicker from './components/ColorPicker'
import { useState } from 'react'

function App() {
  //state vars
  const [userName, setUserName] = useState('')
  const [chosenColor,setChosenColor] = useState('#aaa')

  const clickHandler = (e) => {
    //set background style to chosenColor on click
    // setBgColor(chosenColor)
  }

  return (
    <>
      <h1>welcome to the scribblr</h1>
      <ColorPicker
        chosenColor={chosenColor}
        setChosenColor={setChosenColor}
      />
      <form>
        <label htmlFor='userName'>enter username here</label>
        <input 
          type="text"
          onChange={(e)=>setUserName(e.target.value)}
        ></input>
      </form>
      <Board 
        chosenColor={chosenColor}
        userName={userName}
        clickHandler={clickHandler}
      />
    </>
  )
}

export default App;
