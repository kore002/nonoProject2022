import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '../../../features/sample/counterSlice';

const Counter = ({ onIncrease, onDecrease }) => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
