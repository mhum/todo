import React from 'react';

const DeleteTodoItems = ({deleteCompletedHandler}) => {
  return (
    <button onClick={deleteCompletedHandler} >
      Delete Completed Items
    </button>
  );
}

export default DeleteTodoItems;