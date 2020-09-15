import React from 'react';

export const Header = ({children}) =>{

    return(
        <div className="container my-5">
            <h2 className="text-center">Gift Expert APP</h2>
            <p className="text-center text-muted">José Eduardo Álvarez L.</p>

            {children}

        </div>
    );
}

export default Header;
