import { useState, useContext } from 'react';
import { TaskContext } from '../store/TaskContext';

const TaskInput = () => {
  const [text, setText] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    
    addTask(text);
    setText('');
  };

  return (
    <form className="task-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
