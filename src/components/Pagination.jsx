import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info,pageNumber,setpageNumber}) => {
/*
primera forma de paginar
  let next =() =>{
    if(pageNumber==0){
      setpageNumber(2)
    }else{
        //valor previo de la pagina
        setpageNumber(prevState => prevState +1)
    }
   
  }

let prev =() =>{
    if(pageNumber==1 || pageNumber==0 )return;
    //valor previo de la pagina
    setpageNumber(prevState => prevState - 1)
  
}

  return (
    <div className='container'>
        <button onClick={prev} type="button" className='btn btn-primary'>
            Anterior
        </button>
        <button onClick={next} type="button" className='btn btn-primary'>
            Siguiente
        </button>

    </div>
  )*/

    //segunda forma de paginar

   
    return(
        
        <ReactPaginate 
        nextLabel="Siguiente" previousLabel="Anterior"        
         className='pagination justify-content-center gap-4 my-4' 
         pageCount={info.pages}
         nextClassName="btn  " 
         previousClassName='btn '
         pageClassName='page-item'
         pageLinkClassName='page-link'
         activeClassName='active'         
         onPageChange={(data)=>setpageNumber(data.selected+1)}
         />
    )

}

export default Pagination