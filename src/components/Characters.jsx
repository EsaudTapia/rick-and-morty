import React from "react";
import Buscar from "./Buscar";
import Pagination from "./Pagination";

const Characters = ({ info,setBuscrar,pageNumber,setpageNumber,characters, setCharacters }) => {
  //metodo para limpiar el estado
  const clearState = () => {
    setCharacters(null);
  };



  return (
    <>
      <h1>Characters</h1>
      <span className="back-home" onClick={clearState}>
        Volver al inicio
      </span>
      <br /><br />      
      <Buscar  setBuscrar={setBuscrar} setpageNumber={setpageNumber}/>
      
        {          
         //hacemos Un if ternario para mostrar un mensaje cuando no hay personajes
          characters=="There is nothing here"
          ? (
          //mostrar mensaje centrado en la pantalla con boostrap
          
            <div className="alert alert-info px-5 mt-2 " role="alert">
              <h6>No exite ese personaje</h6>
            </div>                     
         
          ) : ( 
      <div className="container-characters">
        {
        characters.map((character, index) => (
          
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    {character.status}
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    {character.status}
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodio:</span>
                <span className="text-grey">{character.episode.length}</span>
              </p>

              <p>
                <span className="text-grey">Especie:</span>
                <span className="text-grey">{character.species}</span>
              </p>
            </div>
          </div>
        )
        )
                }
      </div>
      )}

      <div>
      <Pagination info={info} pageNumber={pageNumber} setpageNumber={setpageNumber}/>
      </div>

      

      <span className="back-home" onClick={clearState}>
        Volver al inicio
      </span>
    </>
  );
};

export default Characters;
