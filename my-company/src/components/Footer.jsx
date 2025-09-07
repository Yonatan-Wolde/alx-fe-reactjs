function Footer() {
  const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    background: '#f1f1f1',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2025 My Company. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;