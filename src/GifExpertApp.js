import { useState } from "react";
import React from 'react'
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp=()=>{

    const [categorias, setCategorias] = useState(['Goku']);
    return  (
    <div className="container">
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias={setCategorias} />
    <hr/> 
   {
        categorias.map(item=>{
            return <GifGrid key={item} category={item}/>
        })
    }  
    </div>
    );
}

export default GifExpertApp;