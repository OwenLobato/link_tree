import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '../../../styles/apply.module.css';

export const Apply = () => {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.name);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!category) return toast.error('Add a category');
    toast('You are registered successfully');
    console.log('You are registered successfully');
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
              <img className='w-6 mr-2' src='/svgs/insta.svg' alt='IG' />
              <input
                type='text'
                placeholder='Username'
                className='focus:outline-none w-full'
                required
              />
            </span>
            <input
              type='email'
              placeholder='Enter your email'
              className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'
              required
            />
            <input
              type='password'
              placeholder='Set a password'
              className='shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'
              required
            />

            <h5 className='text-sm text-center text-indigo-400'>
              Account type
            </h5>
            <span className='flex justify-center'>
              <label className='flex flex-row mr-3'>
                <input
                  name='Creator'
                  type='checkbox'
                  checked={category === 'Creator'}
                  onChange={handleCategoryChange}
                />
                <p className='pl-2'>Creator</p>
              </label>
              <label className='flex flex-row mr-3'>
                <input
                  name='Agency'
                  type='checkbox'
                  checked={category === 'Agency'}
                  onChange={handleCategoryChange}
                />
                <p className='pl-2'>Agency</p>
              </label>
              <label className='flex flex-row mr-3'>
                <input
                  name='Brand'
                  type='checkbox'
                  checked={category === 'Brand'}
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
      </div>
    </section>
  );
};
