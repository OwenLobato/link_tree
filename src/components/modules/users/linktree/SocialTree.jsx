import { Link } from 'react-router-dom';

export const SocialTree = ({ socials }) => {
  const [facebook, twitter, instagram, youtube, linkedIn, gitHub] = socials.map(
    (social) => Object.values(social)[0]
  );

  const socialIcons = [
    { name: 'Facebook', icon: 'facebook.svg', link: facebook },
    { name: 'Instagram', icon: 'instagram.svg', link: instagram },
    { name: 'YouTube', icon: 'youTube.svg', link: youtube },
    { name: 'LinkedIn', icon: 'linkedIn.svg', link: linkedIn },
    { name: 'GitHub', icon: 'gitHub.svg', link: gitHub },
    { name: 'Twitter', icon: 'twitter.svg', link: twitter },
  ];

  const validSocialIcons = socialIcons.filter(
    (social) =>
      social.link !== undefined && social.link !== null && social.link !== ''
  );

  return (
    <div className='social flex flex-row justify-center my-4'>
      {validSocialIcons.length > 0 ? (
        validSocialIcons.map(({ name, icon, link }, index) => (
          <Link
            key={index}
            to={link}
            target='_blank'
            className='bg-white rounded-full p-2 hover:bg-zinc-100 transition-all duration-500 hover:scale-110 shadow border-gray-700 mx-1 select-none'
          >
            <img src={`/svgs/${icon}`} alt={name} className='w-6' />
          </Link>
        ))
      ) : (
        <p className='text-gray-500'>No social media</p>
      )}
    </div>
  );
};
