const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="bg-black text-white py-4 border-t-4 border-black"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-normal" title="Copyright">
            © {currentYear} Abhishek Bhattarai. Built with Next.js and Tailwind
            CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
