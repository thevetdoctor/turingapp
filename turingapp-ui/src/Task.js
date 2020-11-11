/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import "./Task.css";
import { useTaskState } from './TaskProvider';
import Moment from 'react-moment';

export default function Task(props) {
    const [ checked, setChecked ] = useState(false);
    const [{}, dispatch] = useTaskState();

    const deleteTask = async (id) => {
        // const deleteResponse = await axios({
        //     method: 'DELETE',
        //     url: `http://localhost:5000/tasks/${id}`,
        //     headers: {'Content-Type': 'application/json'}
        //   });
        //   console.log("API deleteTask data", deleteResponse.data);

          dispatch({
            type: 'DELETE_TASK',
            taskId: id
          });

          const getResponse = await axios({
            method: 'GET',
            url: 'http://localhost:5000/tasks',
            headers: {'Content-Type': 'application/json'}
          });
          console.log("API data", getResponse.data);
          dispatch({
            type: 'GET_TASKS',
            tasks: getResponse.data
          })      
        }

        useEffect(() => {
          
          const checkTask = () => {
            dispatch({
              type: 'CHECK_TASK',
              taskId: props.id
            });
          }
          // const uncheckTask = () => {
          //   dispatch({
          //     type: 'UNCHECK_TASK',
          //     taskId: props.id
          //   });
          // }
          if(checked) {
            console.log('checked');
            checkTask(props._id);
          } else {
            console.log('checked');
            // uncheckTask(props._id);
          }
          console.log('id: ', props.id);
        }, [checked]);

    return (
        <div className={`task ${!checked ? props.checked : ""}`}>
            <input 
            className="task_checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
             />
            <div className="task_main">
                 {props.name}
                <span>
                <Moment fromNow>{props.createdOn}</Moment>
                </span>
            </div>
            <div className="task_delete" onClick={() => deleteTask(props.id)}>
                <FaTrashAlt />
            </div>
        </div>
    )
}
