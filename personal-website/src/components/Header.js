import {Link} from 'react-router-dom';
import './header.css';

function Header() {
    return(
        <nav style={{ margin: 10 }}>
        <div className='div-header'>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/contact" style={{ padding: 5 }}>
          Contact
        </Link>
        <Link to="/resume" style={{ padding: 5 }}>
          Resume
        </Link>
        <Link to="/projects" style={{ padding: 5 }}>
          Projects
        </Link>
        </div>
      </nav>
    );
}

export default Header;