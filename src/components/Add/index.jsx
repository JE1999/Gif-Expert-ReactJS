import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const Add = ({setCategories}) =>{

    const [ inputValue, setInputValue ] = useState('');

    const handleChange = e =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        setCategories( cat => [inputValue, ...cat ]);

        setInputValue('');
    }


    return(
        <form
            onSubmit={ handleSubmit }
        >
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Buscar Gift..."
                    value={ inputValue }
                    onChange={ handleChange }
                    required
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" id="button-addon2">Buscar</button>
                </div>
            </div>
            <hr/>
        </form>
    );
}

Add.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default Add