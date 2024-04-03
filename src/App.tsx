import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [wordCount, setWordCount] = useState(0)
  const [totalChar, settotalChar] = useState(0)

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  function wordcount(){
    let hello = inputValue.split(" ").filter(function (letter){
      return letter !== ''
    })
    let totalCharacter = inputValue.length
    settotalChar(totalCharacter)
    setWordCount(hello.length)
  }
  return (
    <>
    <div>
      <h1>BEST WORD COUNTER APP IN THIS WORLD</h1>
      <input style={
        {
          padding: '10px',
          margin: '5px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '18px',
          width: '500px', // Adjust the width as needed
          height: '35px'
        }
      } size={80} onChange={handleInputChange} value={inputValue} id='hello' type="text" />
      <button 
              style={{
                padding: '10px 20px', 
                margin: '20px',
                fontSize: '18px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
      onClick={wordcount} >count word</button><br />
    </div>
    <div style={{
      fontSize: '30px',
      margin: '50px 10px'
    }}>

      Number of Words in provided Text are {wordCount} <br></br>
      Total Character length is {totalChar}
    </div>
    </>
  )
}







export default App
