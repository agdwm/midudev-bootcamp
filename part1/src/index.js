import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button.jsx'
import Statistics from './components/Statistics.jsx'
import Statistic from './components/Statistic.jsx'

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
        <Statistics title='Statistics' all={all} mssg="No feedback given">
          <Statistic text='Good:' value={good}/>
          <Statistic text='Neutral:' value={neutral}/>
          <Statistic text='Bad:' value={bad}/>
          <Statistic text='All:' value={all}/>
          <Statistic text='Average:' value={average || 0}/>
          <Statistic text='Positive:' value={positives || 0}/>
        </Statistics>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)