import React, { useState } from 'react';

const AddItem = ({addItemHandler}) => {
  const [itemText, setItemText] = useState('');

  const handleChange = (e) => {
    setItemText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItemHandler(itemText);
    setItemText('');
  }

  return (
    <form>
      <label>
        Add Item:
        <input type="text" name="item" value={itemText} onChange={handleChange} />
      </label>
      <input type="submit" value="Add" onClick={handleSubmit} />
    </form>
  );
}

export default AddItem;