const Header = () => {
  return (
    <header className='px-4 sm:px-8 lg:px-16 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center'>
      <div className='flex items-center'>
        <div className='w-10 h-10 rounded-lg bg-[#00BFA5] flex items-center justify-center text-white font-bold text-xl font-poppins'>
          DH
        </div>
        <h1 className='ml-3 text-2xl font-poppins font-bold text-white'>
          David <span className='text-[#00BFA5]'>Herbert</span>
        </h1>
      </div>

      <nav className='mt-6 md:mt-0'>
        <ul className='flex space-x-8 text-sm font-medium'>
          <li>
            <a
              href='#projects'
              className='text-[#00BFA5] hover:text-white transition-colors'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className='text-neutral-300 hover:text-white transition-colors'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#experience'
              className='text-neutral-300 hover:text-white transition-colors'
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='text-neutral-300 hover:text-white transition-colors'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
