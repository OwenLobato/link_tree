import { request } from '../utils/requests';

const useUsers = (headers) => {
  const getAllUsers = async () => {
    return await request('GET', `/users/`, headers);
  };

  const getDashboardData = async () => {
    return await request('GET', `/users/dashboard`, headers);
  };

  return {
    getAllUsers,
    getDashboardData,
  };
};

export default useUsers;
