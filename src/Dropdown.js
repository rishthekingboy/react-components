import React, { useState, useEffect } from 'react';
import onClickOutside from 'react-onclickoutside';

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false); //toggle secect box
  const [selection, setSelection] = useState([]); //store values

  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  const handleKey = ({keyCode}) => {
    // unable to select item by arrow key
    // i show use <datalist> to <select> 
    // to to time up i left it here
    if (keyCode === 38) {
      console.log("up")
    }
    if (keyCode === 40) {
      console.log("down")
    }
  }


  useEffect(() => {
    console.log(selection);
  }, [selection]);

  return (
    <div className="select-wrapper">
      <div
        tabIndex={0}
        className="select-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="select-header__title">
          <p className="select-header__title--bold">{selection?.length <= 0 ? title : selection[selection.length-1]?.value} - ({selection?.length})</p>
        </div>
        <div className="select-header__action">
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
      </div>
      <ul className="selectedItems">
        {
          selection.map((e,i) => (
            <li key={i}>{e.value}</li>
          ))
        }
      </ul>


      {open && (
        <ul className="select-list" onKeyDown={ e => handleKey(e) } >
          {items.map(item => (
            <li className="select-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)} className={isItemInSelection(item) ? 'selectedItems-button': null}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);