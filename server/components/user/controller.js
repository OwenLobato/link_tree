import { getAllUsers } from "./store.js";

export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allUsers = await getAllUsers();

      resolve(allUsers);
    } catch (err) {
      reject(err);
    }
  });
};
