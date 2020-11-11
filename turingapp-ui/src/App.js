/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Tasks from './Tasks';
import FinishedTasks from './FinishedTasks';
import Header from './Header';
import { useTaskState } from './TaskProvider';

function App() {
  const [{}, dispatch] = useTaskState();

  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header />
              <Tasks />
            </Route>
            <Route path="/done">
              <Header />
              <FinishedTasks />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
