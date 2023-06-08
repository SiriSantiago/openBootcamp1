import React, { useEffect , useState} from 'react'
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

  const defaultTask = new Task('example','default description',false ,LEVELS.NORMAL)

  const [tasks, setTaks] = useState([defaultTask]);

  useEffect(() => {
    console.log('task has been modified')
    return () => {
      console.log('tasklist component is going to unmount...')
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log('TODO: cambiar el estado de una task')
  }

  return (
    <div>
        <div>
          Your task:
        </div>
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
};


export default TaskListComponent
