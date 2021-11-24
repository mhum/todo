import { MouseEventHandler } from 'react';

type Props = {
  deleteCompletedHandler: MouseEventHandler<HTMLButtonElement>
}

const DeleteTodoItems = ({deleteCompletedHandler}: Props) => {
  return (
    <button onClick={deleteCompletedHandler} >
      Delete Completed Items
    </button>
  );
}

export default DeleteTodoItems;