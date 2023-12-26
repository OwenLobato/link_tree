import { LinkBox, UserHeader } from '../../../../components/modules';
import { useUserContext } from '../../../../contexts/userContext';

export const Dashboard = () => {
  const { userData } = useUserContext();

  return (
    <div className=''>
      <UserHeader />
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
