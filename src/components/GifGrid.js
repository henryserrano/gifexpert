import React, { } from 'react';
import { useFetchGifts } from '../hooks/useFetchGifts';
/* import { getGifts } from '../helpers/getGifts'; */
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifts(category);


    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'> {category} </h3>

            {loading && <p className='card animate__animated animate__flash'>Cargando...</p>}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}