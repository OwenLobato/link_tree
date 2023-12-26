import { request } from '../utils/requests';

const useUsers = (headers) => {
  const getUser = async (username) => {
    return await request('GET', `/users/linkTree/${username}`, headers);
  };

  const getDashboardData = async () => {
    return await request('GET', `/users/dashboard`, headers);
  };

  const saveSocials = async (username, socials) => {
    return await request('POST', `/users/save/${username}/socials`, headers, {
      data: socials,
    });
  };

  return {
    getUser,
    getDashboardData,
    saveSocials,
  };
};

export default useUsers;
