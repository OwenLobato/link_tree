import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../../hooks/useUsers';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { getAllUsers } = useUsers({
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  });
  const [userData, setUserData] = useState([]);

  const logoutHandler = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  useEffect(() => {
    if (!localStorage.getItem('authToken')) {
      navigate('/');
    }

    getAllUsers()
      .then(({ data }) => {
        setUserData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <button className='logout-button' onClick={logoutHandler}>
        Logout
      </button>
      <h1>Dashboard</h1>
      <ol>
        {userData.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ol>
    </div>
  );
};
