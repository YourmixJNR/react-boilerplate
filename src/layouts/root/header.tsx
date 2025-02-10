import { H1 } from "../../components/typography";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-20 z-10 bg-[#080A14]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 xl:px-8">
        <Link to="/">
          <H1>React Boilerplate</H1>
        </Link>
        <ul className="flex gap-x-5">
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
