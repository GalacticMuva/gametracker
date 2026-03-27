import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
{/* Title */}
          <div className="text-xl font-bold tracking-wider text-indigo-400">
            <Link to="/">GameTracker</Link>
          </div>

{/* Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-indigo-300 transition-colors">
              My Games
            </Link>
            <Link to="/add" className="hover:text-indigo-300 transition-colors">
              Add Game
            </Link>
          </div>

{/* Mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

{/* Mobile Links */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800 border-t border-slate-700`}>
        <Link 
          to="/" 
          onClick={closeMenu}
          className="block py-3 px-6 hover:bg-slate-700 border-b border-slate-700"
        >
          My Games
        </Link>
        <Link 
          to="/add" 
          onClick={closeMenu}
          className="block py-3 px-6 hover:bg-slate-700"
        >
          Add Game
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;