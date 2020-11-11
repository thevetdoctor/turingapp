/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Task from './Task';
import "./Tasks.css";
import Modal from 'react-modal';
import { useTaskState } from './TaskProvider';
import { FaTimesCircle, FaRegPlusSquare } from 'react-icons/fa';
import axios from 'axios';

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

export default function Tasks(props) {
  const [{ tasks }, dispatch] = useTaskState();
  const [openModal, setOpenModal] = useState(false);

  console.log('within Task component: ', tasks);
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

    return (
        <div>
            <h3>My Tasks : {tasks?.length}</h3>
            <Modal 
              isOpen={openModal}
              // style={customStyles}
            >
              <button onClick={() => setOpenModal(false)}><FaTimesCircle /></button>
              <h2> Plan a new task! </h2>
              <form>
                <input type="text" placeholder="What task" />
                <input type="text" placeholder="What type" />
                <input type="submit"/>
              </form>
            </Modal>
            <div className="tasks_main">
              <div>
                <div className="tasks_new" onClick={() => setOpenModal(true)}>
                  <FaRegPlusSquare /> 
                  <span>Add Task</span>
                </div>
                <div className="tasks_new">
                  <Link to="/done">
                    <span>Finished Tasks</span>
                  </Link>
                </div>
              </div>
              {tasks?.map((item) => (
                <Task 
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  type={item.type}
                  status={item.status}
                  time={item.time}
                /> 
              ))}
            </div>
        </div>
    )
}

