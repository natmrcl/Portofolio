import React from "react";
import "./footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      Copyright &#169; {currentYear} Natya Madya Marciola. All right received.
    </footer>
  );
};

export default Footer;
