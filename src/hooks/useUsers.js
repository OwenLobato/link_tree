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

  const saveProfile = async (username, profile) => {
    return await request('PUT', `/users/save/${username}/profile`, headers, {
      data: profile,
    });
  };

  const saveLinks = async (username, links) => {
    return await request('PUT', `/users/save/${username}/links`, headers, {
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
