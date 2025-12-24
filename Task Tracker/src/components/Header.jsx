import { useContext } from 'react';
import { TaskContext } from '../store/TaskContext';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(TaskContext);

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
