/* eslint-disable no-empty-pattern */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';
import "./Task.css";
import { useTaskState } from './TaskProvider';
import Moment from 'react-moment';

export default function Task(props) {
    const { checked } = props;
    const [{}, dispatch] = useTaskState();

    const deleteTask = async (id) => {
        // const deleteResponse = await axios({
        //     method: 'DELETE',
        //     url: `http://localhost:5000/tasks/${id}`,
        //     headers: {'Content-Type': 'application/json'}
        //   });
          // console.log("API deleteTask data", deleteResponse.data);

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
          });
    }

    const checkTask = async () => {
      dispatch({
        type: 'CHECK_TASK',
        taskId: props.id
      });
      const getResponse = await axios({
        method: 'PATCH',
        url: `http://localhost:5000/tasks/${props.id}`,
        headers: {'Content-Type': 'application/json'},
        data: {checked: 'strike', done: true}
      });
      console.log("API data", getResponse.data);
    }

    const uncheckTask = async (id) => {
      dispatch({
        type: 'UNCHECK_TASK',
        taskId: props.id
      });
      const getResponse = await axios({
        method: 'PATCH',
        url: `http://localhost:5000/tasks/${props.id}`,
        headers: {'Content-Type': 'application/json'},
        data: {checked: '', done: false}
      });
      console.log("API data", getResponse.data);
    }

    const setChecked = () => {
      if(checked) {
        console.log('unchecked');
        uncheckTask(props.id);
      } else {
        console.log('checked');
        checkTask(props.id);
      }
    }

    return (
        <div className={`task ${props.checked}`}>
            <input 
            className="task_checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked()}
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
