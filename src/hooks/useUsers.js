import { request } from '../utils/requests';

const useUsers = (headers) => {
  const getUser = async (username) => {
    return await request('GET', `/users/linkTree/${username}`, headers);
  };

  const getDashboardData = async () => {
    return await request('GET', `/users/dashboard`, headers);
  };

  return {
    getUser,
    getDashboardData,
  };
};

export default useUsers;
