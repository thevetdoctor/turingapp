/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Task from './Task';
import "./Tasks.css";
import { useTaskState } from './TaskProvider';
import axios from 'axios';
import config from './config';

const apiUrl = config();

export default function Tasks(props) {
  const [{ tasks }, dispatch] = useTaskState();

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

    const checkedTasks = tasks.filter(x => x.checked === 'strike');
    console.log('within Task component: ', checkedTasks);

    return (
        <div>
            <h3>My Finished Tasks : {checkedTasks?.length}</h3>
            <div className="tasks_main">
              <div>
               <Link to="/">
               <div className="tasks_new">
                <span>Pending Tasks</span>
                </div>
               </Link>
             </div>
              {checkedTasks?.map((item) => (
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

