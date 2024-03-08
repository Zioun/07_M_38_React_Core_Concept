import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis unde. Dolores aliquid exercitationem voluptatem. Ex nesciunt doloribus quia enim suscipit, quod excepturi iste officia explicabo, quas cumque quaerat voluptatem.</p>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person(){
  const bonus = 25;
  const money = 20;
  const person = {name: "Sakib", age: 30}
  return(
    <h3>I am {person.name} age {person.age} money {money + bonus}</h3>
  )
}

function Student(){
  return (
    <div>
      <h1>I am a student</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum eos consequatur veritatis amet perferendis vitae.</p>
    </div>
  )
}
export default App
