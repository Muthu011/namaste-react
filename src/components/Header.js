import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";

const Header = () => {
  const { loggedInUsername } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-1">
      <div className="logo-container">
        <img
          className="w-56"
          src="https://tse4.mm.bing.net/th?id=OIP.8BDCJdu2o2f4m8wS_XdlYAHaFk&pid=Api&P=0&h=180"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/"> Cart</Link>
          </li>
          <button className="login">Login</button>

          <li className="px-4 font-bold">
            <Link to="/"> {loggedInUsername}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
