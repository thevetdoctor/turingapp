import React from 'react'
import Task from './Task'

export default function Tasks(props) {
    return (
        <div>
            <h3>My Tasks</h3>
           {props.items.map((item) => (
              <div>
                <Task 
                    key={item._id}
                    name={item.name}
                /> 
              </div>
            ))}
        </div>
    )
}

