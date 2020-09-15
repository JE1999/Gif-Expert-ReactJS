import React from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';

export const ListGrid = ({ category }) =>{

    const { data:images, loading, error } = useFetchGifs(category);

    if(error){
        return(
            <h1>Error</h1>
        )
    }

    if(loading){
        return(
            <h1>Cargando</h1>
        )
    }

    return(
        <>
            <h2 className="mt-3">{category}</h2>

            <div className="row d-flex justify-content-between">
                {images?.map(images =>(
                    <div
                        key={images.id}
                        className="col-12 col-sm-5 col-md-4 p-2"
                    >
                        <GridItem 
                            {...images}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

ListGrid.propTypes = {
    category: PropTypes.string
}

export default ListGrid