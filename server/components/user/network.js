import express from 'express';
import {
  getDashboardData,
  saveSocials,
  saveProfile,
  saveLinks,
} from './controller.js';
import { customError } from '../../network/response.js';
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
  if (res.locals.username !== req.params.username)
    return error(req, res, null, null, customError(401, 'Not authorized'));

  saveSocials(req.params.username, req.body)
    .then((userData) => {
      return success(req, res, 200, 'User socials saved', userData);
    })
    .catch((err) => {
      return error(req, res, 500, 'Error saving user socials', err);
    });
});

userRouter.put('/save/:username/profile', (req, res) => {
  if (res.locals.username !== req.params.username)
    return error(req, res, null, null, customError(401, 'Not authorized'));

  saveProfile(req.params.username, req.body)
    .then((userData) => {
      return success(req, res, 200, 'User profile saved', userData);
    })
    .catch((err) => {
      return error(req, res, 500, 'Error saving user profile', err);
    });
});

userRouter.put('/save/:username/links', (req, res) => {
  if (res.locals.username !== req.params.username)
    return error(req, res, null, null, customError(401, 'Not authorized'));

  saveLinks(req.params.username, req.body)
    .then((userData) => {
      return success(req, res, 200, 'User links saved', userData);
    })
    .catch((err) => {
      return error(req, res, 500, 'Error saving user links', err);
    });
});
