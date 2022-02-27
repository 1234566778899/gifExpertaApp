import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data,loading}=useFetchGifs(category);

  return (
    <> 
        <div className="row">
        {loading && <p>Cargando...</p>}
        <h3 className="py-2 text-center bg-dark text-white">{category}</h3>
            {
                data.map(item=>{
                    return <GifGridItem key={item} img={item}/>
                })
            }
        </div>       
    </>
  )
}
