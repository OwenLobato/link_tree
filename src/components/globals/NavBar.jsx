import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const getLinkClassName = (path) =>
    `block py-2 pl-3 pr-4 rounded md:p-0 dark:text-white
    ${
      location.pathname === path
        ? `
        text-white
        bg-blue-700
        md:bg-transparent
        md:text-blue-700
        md:dark:text-blue-500`
        : `
        text-gray-900
        hover:bg-gray-100
        md:hover:bg-transparent
        md:border-0
        md:hover:text-blue-700
        md:dark:hover:text-blue-500
        dark:hover:bg-gray-700
        dark:hover:text-white
        md:dark:hover:bg-transparent`
    }`;

  return (
    <>
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to='/' className='flex items-center'>
            <img src='/images/logo_link.png' className='h-8 mr-3' alt='Logo' />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Link Tree App
            </span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            data-collapse-toggle='navbar-default'
            type='button'
            className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
          <div
            className={`${
              mobileMenuOpen ? '' : 'hidden'
            } w-full md:block md:w-auto focus:outline-none`}
            id='navbar-default'
          >
            <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <Link
                  to='/'
                  className={getLinkClassName('/')}
                  aria-current='page'
                >
                  LogIn
                </Link>
              </li>
              <li>
                <Link to='/register' className={getLinkClassName('/register')}>
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
