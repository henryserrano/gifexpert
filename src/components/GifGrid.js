import React, { useState,useEffect } from 'react';

export const GifGrid = ({ category }) => {

    const [counter, setcounter] = useState(0);

    useEffect( () => {
      getGifts();
  
    }, [])

    const getGifts = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=los simpsons&limit=10&api_key=TP5ydAJBGPrCaCEBUhEdUOKkmwlFx1Hp";
        const resp = await fetch(url);
        const {data}= await resp.json();

        const gifs=data.map( img =>{
            return {
                id:img.id,
                title: img.title,
                url:img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }

   // getGifts();



    return <div>
        <h3>{category}</h3>
        <h3>{counter}</h3>
        <button onClick={()=>setcounter(counter+1)}></button>
    </div>;
};
