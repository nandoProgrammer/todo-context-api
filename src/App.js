import React, { useState } from 'react';
import Context from './Context';
import Counter from './Counter';

export default function App() {
  const [total, setTotal] = useState(0);

  return (
    <Context.Provider value={[total, setTotal]}>
      <div>
        <p>App.js: { total }</p>
        <Counter />
      </div>
    </Context.Provider>
  );
}
