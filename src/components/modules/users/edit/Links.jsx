import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserHeader } from '../dashboard/UserHeader';
import useUsers from '../../../../hooks/useUsers';
import { toast } from 'react-toastify';

export const Links = () => {
  const { username } = useParams();
  const { getUser, saveLinks } = useUsers({
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  });

  const initialLinks = { title: '', url: '', icon: '' };
  const [links, setLinks] = useState([initialLinks]);

  const handleAddLink = () => {
    setLinks([...links, initialLinks]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const handleSaveLinks = (e) => {
    e.preventDefault();

    saveLinks(username, links)
      .then((res) => {
        toast.success(res.data.message);
        setLinks(res.data.data.links);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    const linkToUpdate = { ...updatedLinks[index], [field]: value };
    updatedLinks[index] = linkToUpdate;
    setLinks(updatedLinks);
  };

  useEffect(() => {
    getUser(username)
      .then((res) => {
        setLinks(res.data.data.links);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []);

  return (
    <div>
      <UserHeader />
      <main>
        <section>
          <h1 className='text-center font-bold text-2xl text-gray-600'>
            Add or customize your links
          </h1>
          <div>
            <form onSubmit={handleSaveLinks}>
              {links?.map((link, index) => (
                <div
                  key={index}
                  className='flex flex-col md:flex-row justify-evenly items-center my-2 gap-2'
                >
                  <label>
                    URL:
                    <input
                      type='text'
                      name='url'
                      value={link.url}
                      onChange={(e) =>
                        handleLinkChange(index, 'url', e.target.value)
                      }
                      className='outline-none border-2 border-gray-200 shadow-md rounded-md px-2 p-1 ml-2'
                    />
                  </label>
                  <label>
                    Title:
                    <input
                      type='text'
                      name='title'
                      value={link.title}
                      onChange={(e) =>
                        handleLinkChange(index, 'title', e.target.value)
                      }
                      className='outline-none border-2 border-gray-200 shadow-md rounded-md px-2 p-1 ml-2'
                    />
                  </label>
                  <label>
                    Icon:
                    <input
                      type='text'
                      name='icon'
                      value={link.icon}
                      onChange={(e) =>
                        handleLinkChange(index, 'icon', e.target.value)
                      }
                      className='outline-none border-2 border-gray-200 shadow-md rounded-md px-2 p-1 ml-2'
                    />
                  </label>
                  <button
                    type='button'
                    onClick={() => handleRemoveLink(index)}
                    className='bg-red-500 text-white px-4 py-2 rounded-md shadow-sm'
                  >
                    Remove link
                  </button>
                </div>
              ))}
              <div className='buttons flex flex-col md:flex-row md:gap-5 gap-2 my-2'>
                <button
                  type='button'
                  onClick={handleAddLink}
                  className='bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm w-full'
                >
                  Add link
                </button>
                <button
                  type='submit'
                  className='bg-green-500 text-white px-4 py-2 rounded-md shadow-sm w-full'
                >
                  save
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
