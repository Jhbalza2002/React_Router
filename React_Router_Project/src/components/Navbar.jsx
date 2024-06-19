import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">
        <h1 className="h1_navbar">Home</h1>
      </Link>
      <Link to="/blue">
        <h1 className="h1_navbar">Blue</h1>
      </Link>
      <Link to="/red">
        <h1 className="h1_navbar">Red</h1>
      </Link>
      <Link to="/green">
        <h1 className="h1_navbar"> Green</h1>
      </Link>
    </div>
  );
}
