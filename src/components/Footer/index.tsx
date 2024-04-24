import './Footer.scss';

const Footer = () => {
  const now = new Date();

  return (
    <footer className="Footer">
      <span>© {now.getFullYear()} Dimitri Malignan</span>
    </footer>
  );
};

export default Footer;
