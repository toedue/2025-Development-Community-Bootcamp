import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './store/TaskContext';
import Home from './pages/Home';
import Stats from './pages/Stats';


function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;
