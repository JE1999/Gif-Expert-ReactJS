import React from 'react';

export const GridItem = ({title, url}) =>{

    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={url} className="card-img-top" alt={title} />
            <div className="card-body">
                <p className="card-text text-muted font-weight-bold">{title}</p>
                <a className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer" href={url}>Descargar</a>
            </div>
        </div>
    );
}

export default GridItem;
