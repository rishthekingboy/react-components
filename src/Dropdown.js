import React, { useState,  } from 'react';
import './dropdown.css';
function Dropdown() {
  const [selected, setSelected] = useState([]);
  const [input, setInput] = useState('');
  let items = ['Edge', 'Firefox', 'Opera'];

  const handleInput = (e) => {
    e.preventDefault();
    if (input !== '' && selected.indexOf(input) < 0) {
      setSelected(prev => [...prev, input])
    }


  }



  return (
    <div className="container">
      <h3>DropDown Selector</h3>
      
      <form onSubmit={handleInput}>

        <input list="browsers" name="browser" id="browser" onChange={e => setInput(e.target.value)} />

        <datalist id="browsers">
          {items.map((e, i) => (
            <option key={i} value={e} />
          ))}

        </datalist>

      </form>

      <ul>
        {
          selected.map((s, i) => (
            <li key={i}>{s}</li>
          ))
        }
      </ul>

    </div>
  );
}



export default Dropdown;