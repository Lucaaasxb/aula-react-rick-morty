
import './App.css'
import Card from './card'

function App() {
  const item1 ={
    nome:'Rick Sanchez', 
    foto:'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  const item2 ={
    nome:'Morty smith', 
    foto:'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }
    const item3 ={
    nome:'Summer smith', 
    foto:'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  } 
  const item4 ={
    nome:'Johnny Depp', 
    foto:'https://rickandmortyapi.com/api/character/avatar/23.jpeg'
  } 
    



  return (
    <>
      <Card info= {item1}/>
      <Card info= {item2}/>
      <Card info= {item3}/>
      <Card info= {item4}/>
      
    </>
   
  )
}

export default App
