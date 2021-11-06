import React from 'react';

const DeleteItems = ({deleteCompletedHandler}) => {
  return (
    <button onClick={deleteCompletedHandler} >
      Delete Completed Items
    </button>
  );
}

export default DeleteItems;