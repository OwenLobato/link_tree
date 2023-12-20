import { findUserBy } from './store.js';
import { customError } from '../../network/response.js';

export const getUserDataBy = (key, value) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbUser = await findUserBy(key, value);
      if (!dbUser) {
        reject(customError(401, 'User not found'));
      }

      resolve(dbUser);
    } catch (err) {
      reject(err);
    }
  });
};

export const getDashboardData = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbUser = await findUserBy('_id', userId);
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
