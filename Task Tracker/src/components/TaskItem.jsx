import { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTaskCompletion } = useContext(TaskContext);

  return (
    <li className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          aria-label={`Mark ${task.text} as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        <span className={`task-text ${task.completed ? 'completed' : ''}`}>
          {task.text}
        </span>
      </div>
      <button 
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
        aria-label={`Delete ${task.text}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
