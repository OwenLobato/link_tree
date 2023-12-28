import { request } from '../utils/requests';

const base = '/users';

const useUsers = (headers) => {
  const getUser = async (username) => {
    return await request('GET', `${base}/linkTree/${username}`, headers);
  };

  const getDashboardData = async () => {
    return await request('GET', `${base}/dashboard`, headers);
  };

  const saveSocials = async (username, socials) => {
    return await request('POST', `${base}/save/${username}/socials`, headers, {
      data: socials,
    });
  };

  const saveProfile = async (username, profile) => {
    return await request('PUT', `${base}/save/${username}/profile`, headers, {
      data: profile,
    });
  };

  const saveLinks = async (username, links) => {
    return await request('PUT', `${base}/save/${username}/links`, headers, {
      data: links,
    });
  };

  return {
    getUser,
    getDashboardData,
    saveSocials,
    saveProfile,
    saveLinks,
  };
};

export default useUsers;
