import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../Redux/greetingSlice';
import '../App.css';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">On page refresh you will see Greeting in 5 languages</h1>
      <ul className="greeting">
        {greeting.map((greeting) => (
          <li className="list_item" key={greeting.id}>{greeting.greeting}</li>
        ))}
      </ul>
    </div>
  );
};

export default Greeting;
