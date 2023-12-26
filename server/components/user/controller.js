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
        bio: dbUser.bio,
        avatar: dbUser.avatar,
        username: dbUser.username,
        links: dbUser.links.length,
        socials: dbUser.socialMedia,
      };

      resolve(userData);
    } catch (err) {
      reject(err);
    }
  });
};

export const saveSocials = (username, socials) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbUser = await findUserBy('username', username);
      if (!dbUser) {
        reject(customError(401, 'User not found'));
      }

      dbUser.socialMedia = socialObjectToArray(socials);
      dbUser.save();

      resolve(dbUser);
    } catch (err) {
      reject(err);
    }
  });
};

export const saveProfile = (username, profile) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dbUser = await findUserBy('username', username);
      if (!dbUser) {
        reject(customError(401, 'User not found'));
      }

      dbUser.name = profile.name;
      dbUser.bio = profile.bio;
      dbUser.avatar = profile.avatar;
      dbUser.save();

      resolve(dbUser);
    } catch (err) {
      reject(err);
    }
  });
};

const socialObjectToArray = (objeto) =>
  Object.entries(objeto).map(([clave, valor]) => ({ [clave]: valor }));
