import { request } from '../utils/requests';

const useUsers = (headers) => {
  const getAllUsers = async () => {
    return await request('GET', `/users/`, headers);
  };

  return {
    getAllUsers,
  };
};

export default useUsers;
