const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 py-8 border-t dark:bg-gray-800 dark:text-gray-400">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <span className="text-2xl text-black font-bold">
            <span className="text-blue-600">Your</span> Shop
          </span>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/nur-mohammad-0a1137259/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://web.facebook.com/nurmohammad54800"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/nurmohammad83"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
