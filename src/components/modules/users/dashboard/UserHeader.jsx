import { useNavigate, Link } from 'react-router-dom';
import { ORIGIN_URL } from '../linktree/ShareButton';

export const UserHeader = ({ userData }) => {
  const navigate = useNavigate();

  const { category, avatar, username } = userData;

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <header className='flex flex-row justify-between items-center'>
      <div className='flex flex-col md:flex-row p-5'>
        <button className='inline-flex w-full md:w-auto px-5 py-3 text-purple-500 font-bold hover:text-purple-700 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500'>
          <img src='/svgs/url.svg' alt='' className='w-6 mr-3' />
          Edit links
        </button>
        <button className='inline-flex w-full md:w-auto px-5 py-3 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 border-2 border-red-500 md:ml-4'>
          <img src='/svgs/user.svg' alt='' className='w-6 mr-3' />
          Edit profile
        </button>
      </div>
      <Link to={`${ORIGIN_URL}/linkTree/${username}`}>
        <div className='flex flex-row'>
          <div className='inline-flex mr-5 text-right items-center bg-gray-200 px-5 py-2 rounded-2xl'>
            <div className='text-xs md:text-md flex flex-col flex-wrap'>
              <span className='font-bold'>{username}</span>
              <span>{category} pack</span>
            </div>
            <div className='user-img'>
              <img src={avatar} alt='avatar' className='w-10 ml-5' />
            </div>
          </div>
          <img
            src='/svgs/notification.svg'
            alt=''
            className='w-6 mr-5 cursor-pointer'
            onClick={() => {}}
          />
          <img
            src='/svgs/logout.svg'
            alt=''
            className='w-6 mr-5 cursor-pointer'
            onClick={handleLogout}
          />
        </div>
      </Link>
    </header>
  );
};
