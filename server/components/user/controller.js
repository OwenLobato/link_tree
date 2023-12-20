import { getAllUsers, getUserBy } from './store.js';
import { customError } from '../../network/response.js';

export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUsers = await getAllUsers();

      resolve(allUsers);
    } catch (err) {
      reject(err);
    }
  });
};

export const getDashboardData = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbUser = await getUserBy('_id', userId);
      if (!dbUser) {
        reject(customError(401, 'User not found'));
      }
      const userData = {
        name: dbUser.name,
        category: dbUser.category,
        avatar: dbUser.avatar,
        username: dbUser.username,
        links: dbUser.links.length,
      };

      resolve(userData);
    } catch (err) {
      reject(err);
    }
  });
};
