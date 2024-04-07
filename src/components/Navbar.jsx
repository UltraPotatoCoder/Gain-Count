import { Link } from 'react-router-dom';
import './CSS/Navbar.css';

function Navbar() {
  return (
    <header>
      <h1>GAIN COUNT</h1>
      <nav>
        <ul>
          <li>
            <Link className='links' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='links' to='/'>
              Workouts
            </Link>
          </li>
          <li>
            <Link className='links' to='/'>
              Gainz
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
