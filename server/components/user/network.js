import express from 'express';
import { getUserDataBy, getDashboardData } from './controller.js';
import { success, error } from '../../network/response.js';

export const userRouter = express.Router();

userRouter.get('/linkTree/:username', (req, res) => {
  const key = Object.keys(req.params)[0];
  const value = req.params[key];

  getUserDataBy(key, value)
    .then((userData) => {
      return success(req, res, 200, 'User obtained successfully', userData);
    })
    .catch((err) => {
      return error(req, res, 500, 'Error getting user', err);
    });
});

userRouter.get('/dashboard', (req, res) => {
  getDashboardData(res.locals._id)
    .then((userData) => {
      return success(
        req,
        res,
        200,
        'User data successfully obtained',
        userData
      );
    })
    .catch((err) => {
      return error(req, res, 500, 'Error getting user data', err);
    });
});
