import { LinkBox, UserHeader } from '../../../../components/modules';
import { useUserContext } from '../../../../contexts/userContext';

export const Dashboard = () => {
  const { userData } = useUserContext();

  const getUserSocials = () => {
    if (userData?.socials) {
      const socialsWithValues = userData.socials.filter(
        (social) => Object.values(social)[0] !== ''
      );
      return socialsWithValues.length;
    }

    return 0;
  };

  return (
    <div>
      <UserHeader />
      <main>
        <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
          <LinkBox
            title='Links'
            number={userData?.links}
            svg='url'
            theme='red'
          />
          <LinkBox
            title='Social links'
            number={getUserSocials()}
            theme='green'
          />
          <LinkBox title='Growth' number='30%' svg='growth' theme='blue' />
          <LinkBox title='Links' number='12' theme='yellow' />
        </section>
        <section></section>
      </main>
    </div>
  );
};
