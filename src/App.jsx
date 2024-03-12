import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name='laptop' price='5500'></Device>
      <Device name='Mobile' price="1000"></Device>
      <Device name='watch' price="3"></Device>
      <Person></Person>
      <Student grade='7' score='50'></Student>
      <Student grade={12} score={85}></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props){
  console.log(props);
  return <h2>This Device:{props.name} Price:{props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name:'Rakib',age:22}
  return <h3>I am {person.name} with age:{age + money}</h3>
}

const {grade,score} = {grade: '7', score: '50'};

function Student({grade =1,score=0}){
  console.log(grade,score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  )
}

function Developer(){
  const developerStyle = {
    margin:'20px',
    padding:'20px',
    border:'2px solid red'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
