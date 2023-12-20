export const LinkBox = ({ svg = 'graphic', title, number, theme }) => {
  return (
    <div className='flex items-center p-8 bg-white shadow border rounded-lg'>
      <div
        className={`bg-${theme}-500 inline-flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-full mr-6`}
      >
        <img src={`svgs/${svg}.svg`} alt='.' className='w-6' />
      </div>
      <div className=''>
        <span className='inline-block text-2xl font-bold'>{number}</span>
        <span className='block text-gray-500'>{title}</span>
      </div>
    </div>
  );
};
