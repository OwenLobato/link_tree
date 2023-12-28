import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../../../styles/apply.module.css';
import useAuth from '../../../hooks/useAuth';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialUserData = {
    email: '',
    password: '',
  };
  const [userData, setUserData] = useState(initialUserData);

  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = userData;

    login(email, password)
      .then((res) => {
        localStorage.setItem('authToken', res.data.data.token);
        setUserData(initialUserData);
        navigate('/dashboard');
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <section
      className={`${styles.background} min-h-screen flex justify-center items-center`}
    >
      <div className='main'>
        <div className='content bg-white border-2 px-4 py-8 rounded-2xl shadow-lg'>
          <h1 className='text-2xl font-bold text-center'>
            You're now among top creators
          </h1>
          <p className='text-center'>Access your dashboard</p>
          <p className='text-center py-5 font-bold text-gray-500'>
            Start building your hub 👇
          </p>
          <form
            onSubmit={handleLogin}
            className='flex flex-col gap-4 text-lg mt-5'
          >
            <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
              <img className='w-6 mr-2' src='/svgs/email.svg' alt='IG' />
              <input
                type='email'
                name='email'
                value={userData.email}
                onChange={handleData}
                placeholder='Enter your email'
                className='focus:outline-none w-full'
                required
              />
            </span>

            <input
              type='password'
              name='password'
              value={userData.password}
              onChange={handleData}
              placeholder='Set a password'
              className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'
              required
            />

            <input
              type='submit'
              value='Login'
              className='bg-indigo-600 text-white py-2 rounded-lg cursor-pointer'
            />
          </form>
        </div>
        <h4 className='text-center text-white pt-3'>
          New here?
          <Link to='/apply' className='font-bold text-red-400 ml-2'>
            Apply
          </Link>
        </h4>
      </div>
    </section>
  );
};
