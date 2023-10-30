import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <button className="nav-button">
        <Link to="/">Film Listesi</Link>
      </button>
      <button className="nav-button">
        <Link to="/saved">Kaydedilenler</Link>
      </button>
    </nav>
  );
}

export default NavBar;
