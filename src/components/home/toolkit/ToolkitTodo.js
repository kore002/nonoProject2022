import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeInput, insert, toggle, remove } from '../../../features/sample/todoSlice';

const TodoItem = React.memo(({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
});

const Todos = () => {
  const { input, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(insert(input));
    dispatch(changeInput(''));
  };
  const onChange = (e) => dispatch(changeInput(e.target.value));
  
  return (
    <div className="todolist">
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={() => {
              dispatch(toggle(todo.id));
            }}
            onRemove={() => {
              dispatch(remove(todo.id));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Todos);
