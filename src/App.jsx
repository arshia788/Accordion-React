import React, { useState } from 'react';

import data from './components/data';

import Question from './components/Question';

const App = () => {

  const [items, setItems]= useState(data.questions);
    
  return (
    <div className='container'>
      <h3>any question?</h3>
      <div className='info'>
        {
          items.map(item=> <Question key={item.id} data={item} />)
        }
      </div>
    </div>
  );
};

export default App;