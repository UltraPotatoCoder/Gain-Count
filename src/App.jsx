import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import NewWorkout from './pages/NewWorkout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/newworkout' element={<NewWorkout />} />
      </Routes>
    </>
  );
}

export default App;
