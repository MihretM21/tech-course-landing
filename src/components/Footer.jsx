function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold">
            BrightPath<span className="text-pink-500">Tech</span>
          </p>

          <nav className="flex gap-6 text-sm">
            <a href="#courses" className="hover:text-white transition-colors">
              Courses
            </a>
            <a href="#benefits" className="hover:text-white transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Reviews
            </a>
          </nav>
        </div>

        <hr className="border-slate-800 my-6" />

        <p className="text-sm text-center sm:text-left">
          © 2026 BrightPathTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
