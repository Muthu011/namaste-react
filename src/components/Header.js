import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse4.mm.bing.net/th?id=OIP.8BDCJdu2o2f4m8wS_XdlYAHaFk&pid=Api&P=0&h=180"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact us</Link>
          </li>
          <li>
            <Link to="/"> Cart</Link>
          </li>
          <button className="login">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
