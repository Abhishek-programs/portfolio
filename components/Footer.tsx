export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold">
            © {currentYear} Abhishek Bhattarai. Built with Next.js and Tailwind
            CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
