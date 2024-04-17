import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth.api';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    const user = { email, password };
    try {
      const response = await login(user);
      storeToken(response.data.authToken);
      authenticateUser();
      navigate('/');
    } catch (error) {
      console.log('error login', error);
      setError(error.response.data.message);
    }
  };
  return (
    <div className='mb-10 mx-auto max-w-screen-md mt-10 px-4 py-14 border-2 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-lg text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>
          Ready to get started?
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='mx-auto mb-0 mt-8 max-w-md space-y-4'
      >
        <div>
          <label htmlFor='email' className='sr-only'>
            Email
          </label>

          <div className='relative'>
            <input
              type='email'
              className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm'
              placeholder='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor='password' className='sr-only'>
            Password
          </label>

          <div className='relative'>
            <input
              type='password'
              className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-sm text-gray-500 mt-3'>
            Don`t have an account?
            <Link to='/signup' className='underline m-1' href='#'>
              Signup
            </Link>
          </p>

          <button
            type='submit'
            className='inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white'
          >
            Login
          </button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
