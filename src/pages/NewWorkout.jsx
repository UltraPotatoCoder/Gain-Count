import { useState } from 'react';
import '../components/CSS/NewWourkout.css';

function NewWorkout() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send data to backend)
    console.log({ name, date, time, duration, notes });
  };
  return (
    <>
      <div className='form-holder'>
        <div className='form'>
          <div className='title'>Add a new workout:</div>

          <div className='input-container ic1'>
            <input
              id='firstname'
              className='input'
              type='text'
              placeholder=' '
            />

            <label className='placeholder'>Name</label>
          </div>
          <div className='input-container ic2'>
            <input
              id='lastname'
              className='input'
              type='date'
              placeholder=' '
            />

            <label className='placeholder'></label>
          </div>
          <div className='input-container ic2'>
            <input id='email' className='input' type='text' placeholder=' ' />
            <label className='placeholder'>Time</label>
            <label />
          </div>

          <div className='input-container ic2'>
            <input id='email' className='input' type='text' placeholder=' ' />
            <label className='placeholder'>Duration</label>
            <label />
          </div>

          <div className='input-container ic2'>
            <input id='email' className='input' type='text' placeholder=' ' />
            <label className='placeholder'>Notes</label>
            <label />
          </div>

          <button type='submit' className='submit' onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default NewWorkout;
