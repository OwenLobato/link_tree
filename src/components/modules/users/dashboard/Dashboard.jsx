import { useState, useEffect } from 'react';
import useUsers from '../../../../hooks/useUsers';
import { LinkBox, UserHeader } from '../../../../components/modules';
import { toast } from 'react-toastify';

export const Dashboard = () => {
  const { getDashboardData } = useUsers({
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  });
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getDashboardData()
      .then(({ data }) => {
        console.log(`User data:`, data.data);
        setUserData(data.data);
        toast.success(data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  }, []);

  return (
    <div className=''>
      <UserHeader userData={userData} />
      <main>
        <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
          <LinkBox
            title='Links'
            number={userData?.links}
            svg='url'
            theme='red'
          />
          <LinkBox title='Growth' number='30%' svg='growth' theme='blue' />
          <LinkBox title='Links' number='12' theme='yellow' />
          <LinkBox title='Links' number='12' theme='green' />
        </section>
        <section></section>
      </main>
    </div>
  );
};
