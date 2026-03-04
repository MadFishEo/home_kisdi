import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "홈", path: "/" },
  { label: "소개", path: "/about" },
  { label: "연구", path: "/research" },
  { label: "교육", path: "/education" },
  { label: "소식", path: "/news" },
  { label: "문의", path: "/contact" },
];

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gray-300 flex items-center justify-center transform rotate-0 rounded-3xl">
              <span className="text-black font-bold text-xs leading-none">
                KI
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="text-gray-900 font-bold text-lg leading-tight">
                KISDI
              </p>
              <p className="text-kisdi-red text-xs">
                한국정보통신학술개발연구원
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  location.pathname === item.path
                    ? "text-kisdi-red border-kisdi-red"
                    : "text-gray-700 border-transparent hover:text-gray-900 hover:border-kisdi-red/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="다크모드 전환"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {menuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-1 pt-3 bg-white/95">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium mb-1 transition-colors rounded-lg ${
                  location.pathname === item.path
                    ? "text-kisdi-red bg-kisdi-red/10"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
