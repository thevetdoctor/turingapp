/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Task from './Task';
import "./Tasks.css";
import Modal from 'react-modal';
import { useTaskState } from './TaskProvider';
import { FaTimes, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import config from './config';

const apiUrl = config();

const customStyles = {
  content : {
    backgroundColor: 'rgb(79, 165, 199)',
    fontSize: '1.2em',
    top                   : '44%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '50%',
    transform             : 'translate(-50%, -50%)',
    display: 'flex',
    flexFlow: 'column',
    width: '75vw',
    alignItems: 'center',
    borderRadius: '2em',
    justifyContent: 'center'
  }
};

export default function Tasks(props) {
  const [{ tasks }, dispatch] = useTaskState();
  const [submitted, setSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  Modal.setAppElement('div');

  useEffect(() => {
      const getTasks = async () => {
        const res = await axios({
            method: 'GET',
            url: `${apiUrl}/tasks`,
            headers: {'Content-Type': 'application/json'}
          });
          console.log("API data", res.data);
          dispatch({
            type: 'GET_TASKS',
            tasks: res.data
          })      
        }
        getTasks();
    }, [])

    useEffect(() => {
      setSubmitted(false);
      setOpenModal(false);
    }, [tasks])

    const addTask = async(name, type) => {
      // let id = '5fa82b63f201f705d1a3ab73';
      let str = Math.trunc(Math.random() * 100);
      let id = `5fa82b63f201f705d1a3ab${str}`;
      if(!name || !type) {
        console.log('Input fields must be filled');
        return false;
      }
      setSubmitted(true);
      dispatch({
        type : 'ADD_TASK',
        task: { id, name, type }
      });
      const getResponse = await axios({
        method: 'POST',
        url: `${apiUrl}/tasks/new`,
        headers: {'Content-Type': 'application/json'},
        data: {name, type}
      });
    console.log("API data", getResponse.data, getResponse.status, id);
    setSubmitted(false);
    if(getResponse.status === 200) setOpenModal(false);
    return;
  }

  const formChange = (e) => {
      e.preventDefault();
      console.log(e.target.value);
    }
    const submitForm = (e) => {
      e.preventDefault();
      const name = e.target[0].value;
      const type = e.target[1].value;
      console.log(e.target[1].value);
     addTask(name, type);
    }

    const allTasks = tasks.filter(x => x.checked !== 'strike');
  console.log('within Task component: ', allTasks);

    return (
        <div>
            <h3>My Pending Tasks : {allTasks?.length}</h3>
            <Modal 
              isOpen={openModal}
              style={customStyles}
            >
              <div className="closeBtn" onClick={() => setOpenModal(false)}><span>close</span><FaTimes /></div>
              <h2> Schedule a new task! </h2>
              <form 
                onSubmit={(e) => submitForm(e)} 
                >
                <div>
                  <label>Task</label>
                <input 
                  type="text" 
                  placeholder="Enter your task e.g. Laundry"
                  onChange={(e) => {formChange(e)}}
                  required
                  /><br />
                  </div>
                  <div>
                    <label>Category</label>
                <input 
                  type="text" 
                  placeholder="Enter category, e.g chores"
                  onChange={(e) => {formChange(e)}}
                  required
                  /><br />
                  </div>
                  <div>
                  <label>Date & Time</label>                  
                  <input
                  type="datetime-local"
                  onChange={(e) => {formChange(e)}}
                  required
                  />
                  </div>
                <input 
                type="submit"
                value={submitted ? 'Submitting' : 'Submit'}
                />
              </form>
            </Modal>
            <div className="tasks_main">
              <div>
                <div className="tasks_new" onClick={() => setOpenModal(true)}>
                  <FaPlus /> 
                  <span>Add Task</span>
                </div>
                  <Link to="/done">
                <div className="tasks_new">
                    <span>Finished Tasks</span>
                </div>
                  </Link>
              </div>
              {allTasks?.map((item) => (
                <Task 
                  key={item._id ? item._id : item.id}
                  id={item._id}
                  name={item.name}
                  type={item.type}
                  status={item.status}
                  checked={item.checked}
                  done={item.done}
                  createdOn={item.createdOn}
                  updatedOn={item.updatedOn}
                  finishedOn={item.finishedOn}
                /> 
              ))}
            </div>
        </div>
    )
}

