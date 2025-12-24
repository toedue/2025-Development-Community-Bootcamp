import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      <Header />
      <TaskInput />
      <TaskList />
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/stats" className="back-link">View Stats</Link>
      </div>
    </div>
  );
};

export default Home;
