import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../store/TaskContext';
import Header from '../components/Header';

const Stats = () => {
  const { tasks } = useContext(TaskContext);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div>
      <Header />
      <div className="stats-container">
        <h2>Task Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>
          <div className="stat-item">
            <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>
          <div className="stat-item">
            <h3>{pendingTasks}</h3>
            <p>Pending</p>
          </div>
        </div>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default Stats;
