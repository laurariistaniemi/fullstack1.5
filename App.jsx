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
      {props.part.name} {props.part.exercises}
    </p>
  )
}

//contentin alustus
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1}  />
      <Part part={props.part2}  />
      <Part part={props.part3}  />
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
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  

  //tulostus
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        //exercises1={exercises1}
        part2={part2}
        //exercises2={exercises2}
        part3={part3}
        //exercises3={exercises3}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
  }

export default App