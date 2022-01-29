import React, { useState, useEffect } from 'react';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);



    useEffect(() => {
        getGifts();

    }, [])

    const getGifts = async () => {
        const url = "https://api.giphy.com/v1/gifs/search?q=los simpsons&limit=10&api_key=TP5ydAJBGPrCaCEBUhEdUOKkmwlFx1Hp";
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }

    // getGifts();



    return <div>
        <h3>{category}</h3>
        <ol>
            {images.map(img => (
                <li key={img.id} >{img.title}</li>
            ))
            }
        </ol>

    </div>;
};
