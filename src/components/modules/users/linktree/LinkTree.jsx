import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import { LinkCard } from '../../../../components/modules';
import useUsers from '../../../../hooks/useUsers';

export const LinkTree = () => {
  const { username } = useParams();
  const { getUser } = useUsers({
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  });

  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUser(username)
      .then((res) => {
        console.log('User', res.data.data);
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }, []);

  return (
    <section className='relative'>
      <img
        src={userData?.avatar}
        alt='Avatar'
        className='w-20 absolute rounded-full left-1/2 -translate-x-1/2 mt-2'
      />
      <h2 className='text-center text-lg font-bold pt-28'>
        {userData?.name ?? 'No name'}
      </h2>
      <p className='text-center pb-5'>{userData?.bio ?? 'No bio'}</p>
      <div className='flex flex-col justify-center max-w-7xl m-auto md:my-5 w-full md:w-2/5'>
        <AnimatePresence>
          {userData?.links?.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 + 0.5 },
              }}
            >
              <LinkCard
                title={link?.title}
                url={link?.url}
                image={link?.image}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
