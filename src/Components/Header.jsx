import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="#43a047 green darken-1">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Tv Maze</Link>
        </div>
      </nav>
    )
}