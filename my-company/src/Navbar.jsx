import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    background: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;