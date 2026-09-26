import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold tracking-tight">
          BrightPath<span className="text-pink-500">Tech</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-slate-300 hover:text-white transition-colors">
            Courses
          </a>
          <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">
            Reviews
          </a>
          <a
            href="#cta"
            className="bg-pink-600 hover:bg-pink-700 transition-colors text-white font-semibold px-4 py-2 rounded-lg"
          >
            Enroll Now
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 flex flex-col gap-4">
          <a href="#courses" className="text-slate-300 hover:text-white transition-colors">
            Courses
          </a>
          <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">
            Reviews
          </a>
          <a
            href="#cta"
            className="bg-pink-600 hover:bg-pink-700 transition-colors text-white font-semibold px-4 py-2 rounded-lg text-center"
          >
            Enroll Now
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
