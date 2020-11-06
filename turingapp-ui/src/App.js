/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
import Tasks from './Tasks';
import axios from 'axios';

function App() {
  const [ items, setItems ] = useState([
    { _id: 1, name: 'swimming' },
    { _id: 2, name: 'swimming' },
    { _id: 3, name: 'swimming' },
    { _id: 4, name: 'singing' }
  ]);

useEffect(() => {
    const getItems = async () => {
    const res = await axios({
      method: 'GET',
      url: 'localhost:5000/tasks'
    });
    console.log(res.data);
  }
    getItems();
}, []);

  console.log(items);
  return (
    <div className="App">
      <h2>Turing Task Manager</h2>
      <Tasks items={items} />
    </div>
  );
}

export default App;
