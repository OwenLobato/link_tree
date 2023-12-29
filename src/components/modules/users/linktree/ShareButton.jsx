import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ORIGIN_URL =
  process.env.REACT_APP_NODE_ENV === 'production'
    ? process.env.REACT_APP_URL_PRODUCTION
    : process.env.REACT_APP_URL;

export const ShareButton = () => {
  const { username } = useParams();

  const copyLink = () => {
    let userLink = '';
    if (process.env.REACT_APP_NODE_ENV === 'production') {
      userLink = `${ORIGIN_URL}/#/linkTree/${username}`;
    } else {
      userLink = `${ORIGIN_URL}/linkTree/${username}`;
    }
    navigator.clipboard.writeText(userLink);

    toast('Copied to clipboard');
  };

  return (
    <div
      onClick={copyLink}
      className='absolute cursor-pointer top-10 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2 border-indigo-400'
    >
      <img src='/svgs/share.svg' alt='share' className='w-6' />
    </div>
  );
};
