import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ORIGIN_URL } from '../linktree/ShareButton';
import useUsers from '../../../../hooks/useUsers';
import { useUserContext } from '../../../../contexts/userContext';
import { toast } from 'react-toastify';

export const UserHeader = () => {
  const navigate = useNavigate();
  const { getDashboardData } = useUsers({
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  });
  const { userData, setUserData } = useUserContext();
  const { category, avatar, username } = userData;

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUserData({
      username: '',
      name: '',
      bio: '',
      category: '',
      avatar: '',
    });
    navigate('/');
  };

  useEffect(() => {
    getDashboardData()
      .then(({ data }) => {
        setUserData(data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }, []);

  return (
    <header className='flex flex-col-reverse md:flex-row justify-between items-center my-2 md:my-0'>
      <div className='flex flex-col md:flex-row p-5'>
        <Link to={`/edit/${userData.username}/links`}>
          <button className='inline-flex w-full md:w-auto px-5 py-3 text-purple-500 font-bold hover:text-purple-700 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500'>
            <img src='/svgs/url.svg' alt='' className='w-6 mr-3' />
            Edit links
          </button>
        </Link>
        <Link to={`/edit/${userData.username}/profile`}>
          <button className='inline-flex w-full md:w-auto px-5 py-3 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 border-2 border-red-500 md:ml-4'>
            <img src='/svgs/user.svg' alt='' className='w-6 mr-3' />
            Edit profile
          </button>
        </Link>
      </div>
      <Link to={`${ORIGIN_URL}/linkTree/${username}`}>
        <div className='flex flex-row'>
          <div className='inline-flex mr-5 text-right items-center bg-gray-200 px-5 py-2 rounded-2xl'>
            <div className='text-xs md:text-md flex flex-col flex-wrap'>
              <span className='font-bold'>{username}</span>
              <span>{category} pack</span>
            </div>
            <div className='user-img'>
              <img
                src={avatar}
                alt='avatar'
                className='w-10 ml-5 rounded-full'
              />
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
