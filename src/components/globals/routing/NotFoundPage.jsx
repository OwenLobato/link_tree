import { Link } from 'react-router-dom';
import styles from '../../../styles/apply.module.css';

export const NotFoundPage = () => {
  return (
    <section
      className={`${styles.background} min-h-screen flex justify-center items-center`}
    >
      <div className='main'>
        <div className='content bg-white border-2 px-4 py-8 rounded-2xl shadow-lg'>
          <h1 className='text-2xl font-bold text-center text-red-500'>
            404 - Page Not Found
          </h1>
          <p className='text-center mt-3'>
            Sorry, the page you are looking for does not exist.
          </p>
          <div className='flex flex-col gap-4 text-lg mt-5'>
            <Link
              to='/'
              className='bg-indigo-600 text-white py-2 rounded-lg cursor-pointer text-center hover:bg-indigo-500 transition-all duration-200'
            >
              Return to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
