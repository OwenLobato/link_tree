import User from '../../models/User.js';
import { customError } from '../../network/response.js';

export const login = (email, password) => {
  return new Promise(async (resolve, reject) => {
    if (!email || !password) {
      reject(customError(400, 'Please provide email and password'));
    }

    try {
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        reject(customError(401, 'Invalid credentials'));
      }

      resolve({ name: 'Owen Lobato' });
    } catch (err) {
      reject(customError(500, err.message));
    }
  });
};

export const register = (username, email, password) => {
  return new Promise(async (resolve, reject) => {
    if (!username || !email || !password) {
      reject(customError(400, 'Please provide the complete data'));
    }

    try {
      const user = await User.create({
        username,
        email,
        password,
      });

      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};
