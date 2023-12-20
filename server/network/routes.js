import { config } from 'dotenv';
import { authRouter, userRouter } from '../components/index.js';
import { isAuthenticated } from '../middlewares/auth.js';

config();

const apiVersion = process.env.API_VERSION;
const authVersion = '/auth';

export const authRoutes = (app) => {
  app.use(authVersion, authRouter);
};

export const userRoutes = (app) => {
  app.use(`${apiVersion}/users`, isAuthenticated, userRouter);
};
