import React from 'react';
import './App.scss';
import Dropdown from './Dropdown';

const items = [
  {
    id: 1,
    value: 'Value 1',
  },
  {
    id: 2,
    value: 'Value 2',
  },
  {
    id: 3,
    value: 'Value 3',
  },
];



function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Select Values components
      </h1>
      <Dropdown title="Select values" items={items} multiSelect />
    </div>
  );
}

export default App;
