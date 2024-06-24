import React from 'react'

//headerin alustus
const Header = (props) => {
  console.log(props)
  return (
  <h1>{props.course}</h1>
  )
}

//partin alustus
const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

//contentin alustus
const Content = (props) => {
  return (
    <div>
      
      <Part part={props.parts}/>
      
    </div>
  )
}

//totalin alustus
const Total = (props) => {
  console.log(props)
  return (
    <div> 
    Number of exercises: {props.total}
    </div>
  )
}


  //datat
  const App = () => {
    const course = 'Half Stack application development'
    //tiedot ovat taulukossa
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  

  //tulostus
  return (
    <div>
      <Header course={course} />
      {/* tämä oli ainoa tapa jolla sain tiedot omille riveilleen
      tähän varmasti löytyy järkevämpi ratkaisu */}
      <Content parts={parts[0].name + "  " + parts[0].exercises}/>
      <Content parts={parts[1].name + "  " + parts[1].exercises}/>
      <Content parts={parts[2].name + "  " + parts[2].exercises}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
    )
  }

export default App