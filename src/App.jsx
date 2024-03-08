import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Player from './Player';
import PlayerStore from './PlayerStore';

function App() {

  const actors = ['Sakib', 'Bapparaz', 'Alomgir'];

  const players = [
    {name: 'Tamim', age: 20,},
    {name: 'Sakib', age: 20,},
    {name: 'Musfiq', age: 20,},
    {name: 'Masrafi', age: 20,},
    {name: 'Papon', age: 20,}
  ]



  return (
    <>
      <h1>Vite + React</h1>
      <hr />
      <h1>Actors</h1>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      <hr />
      <h1>Players</h1>
      {
        players.map(player => <Player player={player}></Player>)
      }
      <PlayerStore players={players}></PlayerStore>
      
      
      <hr />
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn React" isDone={false}></Todo>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis unde. Dolores aliquid exercitationem voluptatem. Ex nesciunt doloribus quia enim suscipit, quod excepturi iste officia explicabo, quas cumque quaerat voluptatem.</p>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student name="Abdullah" age="20"></Student>
      <Developer></Developer>
      <Device name="mobile" price="12000"></Device>
      <Device name="laptop" price="170000"></Device>
      <Device name="pc" price="120000"></Device>
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


function Student({name, age}){
  return (
    <div className='student'>
      <h2>I am a student</h2>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
    </div>
  )
}

function Developer(){
  const devStyle = {
    padding: '20px',
    border: '2px solid tomato',
    borderRadius: '20px',
    marginTop: '30px'
  }
  return (
    <div style={devStyle}>
      <h1>Developer</h1>
    </div>
  )
}

function Device(props){
  console.log(props);
  return (
    <div>
      <h3>Device : {props.name}, Price: {props.price}</h3>
    </div>
  )
}


export default App
