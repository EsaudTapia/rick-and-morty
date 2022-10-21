import React from 'react'

const Buscar = ({setBuscrar,setpageNumber}) => {
  return (
    <>
    <form className=''>
        <input onChange={
            (e)=>{
                setpageNumber(1);
                setBuscrar(e.target.value)                
                
            }

        } type="text" placeholder="Buscar personaje por nombre" className='form-control col-xs-2'/>
        
    </form>
    </>
  )
}

export default Buscar