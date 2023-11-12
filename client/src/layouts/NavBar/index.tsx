import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav>
      <Link style={{ marginRight: 8 }} to="/">
        Home
      </Link>
      <Link style={{ marginRight: 8 }} to="/Library">
        Library
      </Link>
      <Link style={{ marginRight: 8 }} to="/detail">
        MovieDetail
      </Link>
      <Link style={{ marginRight: 8 }} to="/movie-player">
        MoviePlayer
      </Link>
      <Link style={{ marginRight: 8 }} to="/profile">
        Profile
      </Link>
      <Link style={{ marginRight: 8 }} to="/watch-list">
        WatchList
      </Link>
    </nav>
  );
};

export default NavBar;
