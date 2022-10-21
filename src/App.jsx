
import imagenRickMorty from './assets/img/rick-morty.png'
import { useState,useEffect } from 'react'
import './App.css'
import Characters from './components/Characters'


function App() {
  const [character, setcharacter] = useState(null)
  const [pageNumber, setpageNumber] = useState(0);
  const [buscar,setBuscrar] = useState("");
  const [info, setinfo] = useState(null);
  
  const Url= "https://rickandmortyapi.com/api/character/?page="+pageNumber+"&name="+buscar;
  
  
 
  
  useEffect(() => {
    if(pageNumber==0){
      return setcharacter(null);
    }
    fetch(Url)
      .then((response) => response.json())
      .then((data) =>{
        //si no hay personajes que coincidan con la busqueda se muestra un mensaje que indique que no hay personajes
        if(data.error){
          setcharacter(data.error);
         
          
        }else{
          setcharacter(data.results)
          setinfo(data.info)
        }
      } );
  }, [Url]);

  
 

  const reqApi=async() =>{
   //realizando peticion a la api de rick and morty 
    const api= await fetch(Url);
    const charactersApi= await api.json();    
    setcharacter(charactersApi.results); 
    setinfo(charactersApi.info);  
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        
        {
          character ? ( 
            <Characters info={info} setBuscrar={setBuscrar} pageNumber={pageNumber} setpageNumber={setpageNumber} characters={character} setCharacters={setcharacter}/>
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
