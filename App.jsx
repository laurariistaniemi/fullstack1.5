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
      {props.parts}
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
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10 
        },
        {
          name:'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
      
    }
    
    //console.log(course["parts"][0]["exercises"])
  

  //tulostus
  return (
    <div>
        {/*kurssinimi*/}
      <Header course={course.name} /> 

      {/*kurssien nimet, eriteltynä kätevyyden takia suoraan*/}
      <Part parts={course.parts[0].name + " " + course.parts[0].exercises} />
      <Part parts={course.parts[1].name + " " + course.parts[1].exercises}/> 
      <Part parts={course.parts[2].name + " " +  course.parts[2].exercises}/>

      {/*kurssien määrä*/}
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
      
    </div>
    )
  }

export default App