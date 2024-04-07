import '../components/CSS/HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div className='welcome'>
        <h3>Welcome To Gain Count Homie</h3>

        <div>
          <div className='addworkout'>
            <Link to='/newworkout'>
              <button>Add a Workout +</button>
            </Link>
            <img src='/src/assets/arnold.gif' alt='arnold' />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
