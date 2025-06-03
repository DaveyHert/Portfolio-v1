const Footer = () => {
  return (
    <footer className='px-4 sm:px-8 lg:px-16 py-8 bg-neutral-700 bg-opacity-50 text-center text-neutral-400'>
      <p>© {new Date().getFullYear()} David Herbert. All rights reserved.</p>
      <p className='mt-2 text-sm'>
        Designed and developed with <span className='text-[#00BFA5]'>❤</span>
      </p>
    </footer>
  );
};

export default Footer;
