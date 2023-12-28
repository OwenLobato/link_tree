import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../../../styles/apply.module.css';
import useAuth from '../../../hooks/useAuth';

export const Apply = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const initialUserData = {
    username: '',
    email: '',
    password: '',
    category: '',
  };
  const [userData, setUserData] = useState(initialUserData);

  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      category: e.target.name,
    }));
  };

  const validateUsername = (username) => {
    if (!username) return 'Enter a username';
    if (username.length < 3)
      return 'The username must be at least 3 characters';
    if (username.includes(' ')) return 'Username must not have spaces';
    if (!/^[a-zA-Z0-9-]+$/.test(username))
      return 'Username must not have special characters, only "-"';
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, email, password, category } = userData;

    if (!category) return toast.error('Add a category');
    const isValidUsername = validateUsername(username);
    if (isValidUsername) return toast.error(isValidUsername);

    register(username, email, password, category)
      .then((res) => {
        toast.success(res.data.message);
        localStorage.setItem('authToken', res.data.data.token);
        setUserData(initialUserData);
        navigate('/');
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
            Join the top 1% creators
          </h1>
          <p className='text-center'>Create LinkTree for your brand</p>
          <p className='text-center py-5 font-bold text-gray-500'>
            Start building your hub 👇
          </p>
          <form
            onSubmit={handleRegister}
            className='flex flex-col gap-4 text-lg mt-5'
          >
            <span className='flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
              <img
                className='w-6 mr-2'
                src='/svgs/username.svg'
                alt='username'
              />
              <input
                type='text'
                name='username'
                value={userData.username}
                onChange={handleData}
                placeholder='Username'
                className='focus:outline-none w-full'
                required
              />
            </span>
            <input
              type='email'
              name='email'
              value={userData.email}
              onChange={handleData}
              placeholder='Enter your email'
              className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'
              // required
            />
            <input
              type='password'
              name='password'
              value={userData.password}
              onChange={handleData}
              placeholder='Set a password'
              className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'
              // required
            />

            <h5 className='text-sm text-center text-indigo-400'>
              Account type
            </h5>
            <span className='flex justify-center'>
              <label className='flex flex-row mr-3'>
                <input
                  name='Creator'
                  type='checkbox'
                  checked={userData.category === 'Creator'}
                  onChange={handleCategoryChange}
                />
                <p className='pl-2'>Creator</p>
              </label>
              <label className='flex flex-row mr-3'>
                <input
                  name='Agency'
                  type='checkbox'
                  checked={userData.category === 'Agency'}
                  onChange={handleCategoryChange}
                />
                <p className='pl-2'>Agency</p>
              </label>
              <label className='flex flex-row mr-3'>
                <input
                  name='Brand'
                  type='checkbox'
                  checked={userData.category === 'Brand'}
                  onChange={handleCategoryChange}
                />
                <p className='pl-2'>Brand</p>
              </label>
            </span>
            <input
              type='submit'
              value='Apply'
              className='bg-indigo-600 text-white py-2 rounded-lg cursor-pointer'
            />
          </form>
        </div>
        <h4 className='text-center text-white pt-3'>
          Already have an account?
          <Link to='/' className='font-bold text-red-400 ml-2'>
            Login
          </Link>
        </h4>
      </div>
    </section>
  );
};
