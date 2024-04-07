import '../components/CSS/HomePage.css';

function HomePage() {
  return (
    <>
      <div className='welcome'>
        <h3>Welcome To Gain Count Homie</h3>

        <div>
          <div className='addworkout'>
            <button> Add a Workout +</button>
            <img src='/src/assets/arnold.gif' alt='arnold' />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
