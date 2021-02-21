import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button.jsx'
import Paragraph from './components/Paragraph.jsx'

const SCORE = {
  good: 1,
  neutral: 0,
  bad: -1
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const score = good - bad
  const average = score / all
  const positives = (good / all) * 100

  const handleClickGood = () => {
    setGood(good+1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleClickBad = () => {
    setBad(bad+1) 
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
        <Paragraph title='All:' text={all}/>
        <br/>
        <Paragraph title='Average:' text={average || 0}/>
        <Paragraph title='Positive:' text={positives || 0}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)