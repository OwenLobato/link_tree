import express from 'express';
import { getUsers } from './controller.js';
import { success, error } from '../../network/response.js';

export const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  getUsers()
    .then((userData) => {
      return success(
        req,
        res,
        200,
        userData.length > 0
          ? 'All users show successfully'
          : 'No users on database',
        userData
      );
    })
    .catch((err) => {
      return error(req, res, 500, 'Error getting all users', err);
    });
});