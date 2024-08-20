const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Sagar kashyap</strong>
      </p>
    </footer>
  );
};

export default Footer;