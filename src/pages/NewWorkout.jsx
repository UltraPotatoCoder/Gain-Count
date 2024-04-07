import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import '../components/CSS/NewWourkout.css';
import { newWorkout } from '../api/workouts.api';

function NewWorkout() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');

  const user = '660c40f90b302623439c34bd';

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await newWorkout(user);
      console.log('New workout created:', response.data);

      setName('');
      setDate('');
      setTime('');
      setDuration('');
      setNotes('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='form-holder'>
        <div className='form'>
          <div className='title'>Add a new workout:</div>

          <div className='input-container ic1'>
            <input
              id='name'
              className='input'
              value={name}
              type='text'
              placeholder=' '
              onChange={e => setName(e.target.value)}
            />

            <label className='placeholder'>Name</label>
          </div>
          <div className='input-container ic2'>
            <input
              id='date'
              className='input'
              type='date'
              placeholder=' '
              value={date}
            />

            <label className='placeholder'></label>
          </div>
          <div className='input-container ic2'>
            <input
              id='time'
              className='input'
              type='text'
              placeholder=' '
              value={time}
              onChange={e => setTime(e.target.value)}
            />
            <label className='placeholder'>Time</label>
            <label />
          </div>

          <div className='input-container ic2'>
            <input
              id='duration'
              className='input'
              type='text'
              placeholder=' '
              value={duration}
              onChange={e => setDuration(e.target.value)}
            />
            <label className='placeholder'>Duration</label>
            <label />
          </div>

          <div className='input-container ic2'>
            <input id='email' className='input' type='text' placeholder=' ' />
            <label
              className='placeholder'
              value={notes}
              onChange={e => setNotes(e.target.value)}
            >
              Notes
            </label>
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
