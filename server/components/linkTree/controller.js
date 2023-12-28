import { findUserBy } from '../user/store.js';
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
