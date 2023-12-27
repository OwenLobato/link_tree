import { Link } from 'react-router-dom';

export const LinkCard = ({ title, url, icon }) => {
  return (
    <span className='w-full'>
      <Link
        to={url}
        target='_blank'
        className='flex flex-row items-center p-2 rounded-xl text-white bg-indigo-400 hover:bg-indigo-300 mb-3 mx-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-500'
      >
        <img src={icon} alt='' className='bg-white rounded-md p-1 w-11 mr-5' />
        <h4 className='md:text-lg'>{title}</h4>
      </Link>
    </span>
  );
};
