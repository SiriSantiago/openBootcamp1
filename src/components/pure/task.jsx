import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ({task}) => {
  
  useEffect(() => {
    console.log('created task')
    return () => {
      console.log(`task: ${task.name} is going to unmount`)
    };
  }, [task]);
  
  
  
  
  return (
    <div>
      <h2>Nombre: { task.name }</h2>
      <h3>Description: { task.description }</h3>
      <h4>Nivel { task.level }</h4> 
      <h5>this task is: {task.completed ? 'COMPLETED':'PENDING'}</h5> 

    </div>
  )
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};

export default TaskComponent
