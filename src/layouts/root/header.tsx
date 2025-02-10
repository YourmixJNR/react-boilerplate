import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#080A14]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 xl:px-8">
        <Link to="#">
          <h1 className="text-white ">React Boilerplate</h1>
        </Link>
        <ul className="flex gap-x-2 text-white">
          <li>
            <Link to="#">react-js</Link>
          </li>

          <li>
            <Link to="#">boilerplate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
