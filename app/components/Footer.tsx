const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex items-center text-base justify-center mt-8 gap-1 text-color-fourth border-t-2 border-color-fourth border-opacity-10 pt-8">
      <a href="https://batuhankendirli.netlify.app/" target={'_blank'} className="text-lg font-medium footer-link">
        Batuhan Kendirli
      </a>
      <span className="font-inter">- {year}</span>
    </footer>
  );
};

export default Footer;
