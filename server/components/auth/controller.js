import jwt from 'jsonwebtoken';
import User from '../../models/User.js';
import { customError } from '../../network/response.js';

export const login = (email, password) => {
  return new Promise(async (resolve, reject) => {
    if (!email || !password) {
      reject(customError(400, 'Please provide email and password'));
    }

    try {
      const user = await User.findOne({ email, password });
      if (!user) {
        reject(customError(401, 'Invalid credentials'));
      }

      const { _id, username } = user;

      const token = jwt.sign(
        {
          _id,
          username,
          email,
        },
        process.env.JWT_SECRET_KEY
      );

      resolve({ user, token });
    } catch (err) {
      reject(customError(500, err.message));
    }
  });
};

export const register = (username, email, password, category) => {
  return new Promise(async (resolve, reject) => {
    if (!username || !email || !password || !category) {
      reject(customError(400, 'Please provide the complete data'));
    }

    try {
      const user = await User.create({
        username,
        email,
        password,
        category,
      });

      const token = jwt.sign(
        {
          _id: user._id,
          username,
          email,
        },
        process.env.JWT_SECRET_KEY
      );

      const userResponse = { ...user._doc };
      delete userResponse.password;

      resolve({ user: userResponse, token });
    } catch (err) {
      reject(err);
    }
  });
};
