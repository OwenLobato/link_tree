import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer
      aria-label='Site Footer'
      className='flex justify-center items-center py-2 bg-gray-900 mt-auto'
    >
      <Link to='/' className='flex flex-row items-center'>
        <img
          src='/images/logo_link.png'
          className='h-8 hover:-rotate-45 transition-all duration-400'
          alt='Logo'
        />
        <h5 className='text-indigo-400 pl-3 font-bold hover:text-indigo-300 transition-all duration-400'>
          Try LinkTreeApp
        </h5>
      </Link>
    </footer>
  );
};
