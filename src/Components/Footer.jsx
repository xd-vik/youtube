const Footer = () => {
  return (
    <footer className="full bg-white text-black flex flex-col ">
      <div className="flex flex-row flex-wrap text-sm leading-3  gap-2 capitalize font-medium opacity-85 mb-4">
        <a href="#" className="hover:text-gray-300">
          About
        </a>
        <a href="#" className="hover:text-gray-300">
          Press
        </a>
        <a href="#" className="hover:text-gray-300">
          Copyright
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact Us
        </a>
        <a href="#" className="hover:text-gray-300">
          Advertise
        </a>
        <a href="#" className="hover:text-gray-300">
          Developers
        </a>
      </div>
      <div className="flex flex-row flex-wrap text-sm leading-3  gap-2 capitalize font-medium opacity-85 mb-4">
        <a href="#" className="hover:text-gray-300">
          Terms
        </a>
        <a href="#" className="hover:text-gray-300">
          Privacy
        </a>
        <a href="#" className="hover:text-gray-300">
          Policy & Safety
        </a>
        <a href="#" className="hover:text-gray-300">
          How YouTube works
        </a>
        <a href="#" className="hover:text-gray-300">
          Test new features
        </a>
      </div>
      <div className="mt-4 text-xs text-gray-400">© 2024 YouTube Clone</div>
    </footer>
  );
};

export default Footer;
