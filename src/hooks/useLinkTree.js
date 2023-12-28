import { request } from '../utils/requests';

const base = '/linkTree';

const useLinkTree = (headers) => {
  const getLinkTreeByUser = async (username) => {
    return await request('GET', `${base}/${username}`, headers);
  };

  return { getLinkTreeByUser };
};

export default useLinkTree;
