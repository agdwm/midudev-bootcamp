import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button.jsx'
import Paragraph from './components/Paragraph.jsx'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    const newValue = good+1
    setGood(newValue)
  }

  const handleClickNeutral = () => {
    const newValue = neutral+1
    setNeutral(newValue)
  }

  const handleClickBad = () => {
    const newValue = bad+1
    setBad(newValue)
  }

  return (
    <div>
    <div>
      <h2>Give feedback</h2>
        <Button text="good" onClick={handleClickGood}/>
        <Button text="neutral" onClick={handleClickNeutral}/>
        <Button text="bad" onClick={handleClickBad}/>
      </div>
      <div>
        <h3>Statistics</h3>
        <Paragraph title='Good:' text={good}/>
        <Paragraph title='Neutral:' text={neutral}/>
        <Paragraph title='Bad:' text={bad}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)