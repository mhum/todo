import { useState, ChangeEvent } from 'react';
import { useClient } from 'react-ketting';

import { TodoItem } from '../../types/TodoItem';

const AddTodoItem = () => {
  const [itemText, setItemText] = useState('');
  const client = useClient();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemText(e.target.value);
  }

  const handleSubmit = (e: ChangeEvent<EventTarget>) => {
    e.preventDefault();
    const todoCollection = client.go<TodoItem>('/todo')
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