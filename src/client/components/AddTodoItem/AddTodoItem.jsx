import React, { useState } from 'react';
import { useClient } from 'react-ketting';

const AddTodoItem = () => {
  const [itemText, setItemText] = useState('');
  const client = useClient();

  const handleChange = (e) => {
    setItemText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoCollection = client.go('/todo')
    todoCollection.post({
      data: {
        value: itemText,
        completed: false
      }
    });

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

export default AddTodoItem;