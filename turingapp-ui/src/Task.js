import React, { useState } from 'react';
import "./Task.css";

export default function Task(props) {
    const [ checked, setChecked ] = useState(false);
    return (
        <div className={`task ${checked ? "strike" : ""}`}>
            <input 
            className="task_checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
             />
            {props.name}
            <span className="task_delete">X</span>
        </div>
    )
}
