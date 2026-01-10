const Footer = () => {
  return (
    <footer className="w-full h-[8vh] flex items-center justify-center bg-neutral-800 text-white p-4 font-indie">
      <p className="text-[14px]">
        Rick and Morty Universe · Developed by{" "}
        <a
          href="https://github.com/melizadev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-green-300 transition-colors"
        >
          Mariann Zambrano
        </a>
      </p>
    </footer>
  );
};

export default Footer;
