import React from 'react'
import { useState } from "react";
export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    function cambio(e){
        setInputValue(e.target.value);
    }
    function handleSumbit(e){
        e.preventDefault();
        setCategorias(item=> [inputValue]);
    }
  return (
    <>
       <form onSubmit={handleSumbit}>
       <div className="input-group">
           <input 
           type="text" 
           className="form-control"
           value={inputValue}
           onChange={cambio}
           />
           <button className="btn btn-success">Añadir</button>
       </div>
       </form>
    </>
  )
}
