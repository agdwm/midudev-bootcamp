import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Total from './components/Total.jsx'

const App = () => {
   const contents = [
    {part:'Fundamentals of React', exercises:10},
    {part:'Using props to pass data', exercises:7}, 
    {part:'State of a component', exercises:14}]

    return (
      <div>
        <Header course='Half Stack application development'/>
        {contents.map((content,i)=>
          <Content part={content.part} exercises={content.exercises} key={i}/>
        )}
        <Total total={contents.reduce((acc,obj)=>acc+obj.exercises, 0)}/>
      </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))