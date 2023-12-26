import { useState, useEffect } from 'react';
import { useUserContext } from '../../../../contexts/userContext';
import { UserHeader } from '../dashboard/UserHeader';

export const Profile = () => {
  const { userData, setUserData } = useUserContext();
  const [social, setSocial] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
    linkedIn: '',
    gitHub: '',
  });
  const [profileData, setProfileData] = useState({
    name: '',
    bio: '',
    avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
  });

  const handleSocials = (e) => {
    const { name, value } = e.target;
    setSocial((prevSocials) => ({
      ...prevSocials,
      [name]: value,
    }));
  };

  const handleProfile = (e) => {
    const { name, value } = e.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value || '',
    }));
  };

  const saveSocials = (e) => {
    e.preventDefault();
    console.log(social);
  };

  useEffect(() => {
    if (userData) {
      setProfileData((prevProfileData) => ({
        ...prevProfileData,
        name: userData.name,
        bio: userData.bio,
        avatar: userData.avatar,
      }));
    }
  }, [userData]);

  return (
    <div>
      <UserHeader />
      <main>
        <section>
          {/* EDIT PROFILE */}
          <div>
            <h4 className='font-bold text-center mb-5'>Edit profile</h4>
            <div>
              <form className='flex flex-col justify-center items-center'>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img className='w-6 mr-2' src='/svgs/user.svg' alt='IG' />
                  <input
                    type='text'
                    name='name'
                    value={profileData?.name}
                    onChange={handleProfile}
                    placeholder='Set a name'
                    className='focus:outline-none w-full'
                    required
                  />
                </span>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img className='w-6 mr-2' src='/svgs/bio.svg' alt='IG' />
                  <input
                    type='text'
                    name='bio'
                    value={profileData?.bio}
                    onChange={handleProfile}
                    placeholder='Enter a bio'
                    className='focus:outline-none w-full'
                    required
                  />
                </span>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img className='w-6 mr-2' src='/svgs/avatar.svg' alt='IG' />
                  <input
                    type='text'
                    name='avatar'
                    value={profileData?.avatar}
                    onChange={handleProfile}
                    placeholder='Enter image link'
                    className='focus:outline-none w-full'
                    required
                  />
                  <img
                    src={profileData?.avatar}
                    alt='avatar'
                    className='w-10 rounded-full border-2 border-white shadow-md'
                  />
                </span>

                <input
                  type='button'
                  value='save profile'
                  className='bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer text-white'
                />
              </form>
            </div>
          </div>

          {/* EDIT LINKS */}
          <div className='mt-14'>
            <h4 className='font-bold text-center mb-5'>Edit links</h4>
            <div>
              <form className='flex flex-col justify-center items-center'>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img className='w-6 mr-2' src='/svgs/facebook.svg' alt='IG' />
                  <input
                    type='text'
                    name='facebook'
                    value={profileData?.facebook}
                    onChange={handleSocials}
                    placeholder='Enter facebook link'
                    className='focus:outline-none w-full'
                    required
                  />
                </span>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img
                    className='w-6 mr-2'
                    src='/svgs/instagram.svg'
                    alt='IG'
                  />
                  <input
                    type='text'
                    name='instagram'
                    value={profileData?.instagram}
                    onChange={handleSocials}
                    placeholder='Enter instagram link'
                    className='focus:outline-none w-full'
                    required
                  />
                </span>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img className='w-6 mr-2' src='/svgs/twitter.svg' alt='IG' />
                  <input
                    type='text'
                    name='twitter'
                    value={profileData?.twitter}
                    onChange={handleSocials}
                    placeholder='Enter twitter link'
                    className='focus:outline-none w-full'
                    required
                  />
                </span>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img className='w-6 mr-2' src='/svgs/linkedIn.svg' alt='IG' />
                  <input
                    type='text'
                    name='linkedIn'
                    value={profileData?.linkedIn}
                    onChange={handleSocials}
                    placeholder='Enter linkedIn link'
                    className='focus:outline-none w-full'
                    required
                  />
                </span>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img className='w-6 mr-2' src='/svgs/gitHub.svg' alt='IG' />
                  <input
                    type='text'
                    name='gitHub'
                    value={profileData?.gitHub}
                    onChange={handleSocials}
                    placeholder='Enter gitHub link'
                    className='focus:outline-none w-full'
                    required
                  />
                </span>
                <span className='flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none'>
                  <img className='w-6 mr-2' src='/svgs/youtube.svg' alt='IG' />
                  <input
                    type='text'
                    name='youtube'
                    value={profileData?.youtube}
                    onChange={handleSocials}
                    placeholder='Enter youtube link'
                    className='focus:outline-none w-full'
                    required
                  />
                </span>

                <input
                  type='button'
                  value='save profile'
                  onClick={saveSocials}
                  className='bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer text-white'
                />
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
