import { useContext, useState } from 'react';
import { TaskContext } from '../store/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [showAll, setShowAll] = useState(false);

  if (tasks.length === 0) {
    return <p style={{ textAlign: 'center', opacity: 0.6 }}>No tasks yet. Add one above!</p>;
  }

  const visibleTasks = showAll ? tasks : tasks.slice(0, 5);

  return (
    <div>
      <ul className="task-list">
        {visibleTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
      
      {tasks.length > 5 && (
        <button 
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : `Show All (${tasks.length})`}
        </button>
      )}
    </div>
  );
};

export default TaskList;
