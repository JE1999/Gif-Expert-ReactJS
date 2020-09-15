import React, { useState } from 'react';
import Header from './components/UI/Header/index';
import Add from './components/Add';
import ListGrid from './components/ListGrid';

function App() {

  const [ categories, setCategories ] = useState([]);

  return (
    <Header>
    
      <Add setCategories={setCategories} />

      <div className="container">

        {categories.map(category => (
          <ListGrid 
            key={category} 
            category={category} 
          />
        ))}

      </div>

    </Header>
  );
}

export default App;
