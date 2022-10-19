
import imagenRickMorty from './assets/img/rick-morty.png'
import { useState } from 'react'
import './App.css'
import Characters from './components/Characters'

function App() {
  const [character, setcharacter] = useState(null)
  const Url= "https://rickandmortyapi.com/api/character"

  const reqApi=async() =>{
   //realizando peticion a la api de rick and morty 
    const api= await fetch(Url);
    const charactersApi= await api.json();
    console.log(charactersApi);
    setcharacter(charactersApi.results);   
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {
          character ? ( 
            <Characters characters={character} setCharacters={setcharacter}/>
          ) : (
            <>
            <img src={imagenRickMorty} className="img-home" alt="Rick & Morty"  />  
            <br/>
             <button onClick={reqApi} className="btn-search" >Buscar</button>
            </>
           )           
        }
       
   
      </header>            
    </div>
  )
}

export default App
