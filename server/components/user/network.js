import express from 'express';
import {
  getDashboardData,
  saveSocials,
  saveProfile,
  saveLinks,
} from './controller.js';
import { success, error } from '../../network/response.js';

export const userRouter = express.Router();

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

userRouter.post('/save/:username/socials', (req, res) => {
  saveSocials(req.params.username, req.body)
    .then((userData) => {
      return success(req, res, 200, 'User socials saved', userData);
    })
    .catch((err) => {
      return error(req, res, 500, 'Error saving user socials', err);
    });
});

userRouter.put('/save/:username/profile', (req, res) => {
  saveProfile(req.params.username, req.body)
    .then((userData) => {
      return success(req, res, 200, 'User profile saved', userData);
    })
    .catch((err) => {
      return error(req, res, 500, 'Error saving user profile', err);
    });
});

userRouter.put('/save/:username/links', (req, res) => {
  saveLinks(req.params.username, req.body)
    .then((userData) => {
      return success(req, res, 200, 'User links saved', userData);
    })
    .catch((err) => {
      return error(req, res, 500, 'Error saving user links', err);
    });
});
