/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Task from './Task';
import "./Tasks.css";
import Modal from 'react-modal';
import { useTaskState } from './TaskProvider';
import { FaTimes, FaPlus } from 'react-icons/fa';
import axios from 'axios';

const customStyles = {
  content : {
    backgroundColor: 'rgb(79, 165, 199)',
    fontSize: '1.5em',
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '50%',
    transform             : 'translate(-50%, -50%)',
    display: 'flex',
    flexFlow: 'column',
    width: '100vw',
    alignItems: 'center',
    borderRadius: '1em',
    justifyContent: 'center'
  }
};

export default function Tasks(props) {
  const [{ tasks }, dispatch] = useTaskState();
  const [openModal, setOpenModal] = useState(false);

  Modal.setAppElement('div');

  useEffect(() => {
      const getTasks = async () => {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:5000/tasks',
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

    const formChange = (e) => {
      e.preventDefault();
      console.log(e.target.value);
    }
    const submitForm = (e) => {
      e.preventDefault();
      console.log(e.target);
    }

    const allTasks = tasks.filter(x => x.checked !== 'strike');
  console.log('within Task component: ', allTasks);

    return (
        <div>
            <h3>My Tasks : {allTasks?.length}</h3>
            <Modal 
              isOpen={openModal}
              style={customStyles}
            >
              <div className="closeBtn" onClick={() => setOpenModal(false)}><FaTimes /></div>
              <h2> Plan a new task! </h2>
              <form 
                onSubmit={(e) => submitForm(e)} 
                >
                <input 
                  type="text" 
                  placeholder="Enter your task e.g. Read"
                  onChange={(e) => {formChange(e)}}
                  /><br />
                <input 
                  type="text" 
                  placeholder="Enter category, e.g sports"
                  onChange={(e) => {formChange(e)}}
                  /><br />
                <input 
                type="submit" 
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
                  key={item._id}
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

