import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Link2, Menu, Lock } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string, projectName: string, isProtected: boolean) => {
    if (isProtected) {
      if (sessionStorage.getItem(`auth-${projectId}`) === 'true') {
        navigate(`/projects/${projectId}`);
      } 
    } else {
      navigate(`/projects/${projectId}`);
    }
    setDropdownOpen(false);
  };

  const NavLinks = () => (
    <>
      <div className="relative">
        <button 
          className="flex items-center space-x-1 nav-link"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>Projects</span>
          <ChevronDown size={16} />
        </button>
        
        {dropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-10">
            <div className="py-2">
              <button 
                onClick={() => handleProjectClick('tic-tac-toe', 'Tic Tac Toe', false)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Tic Tac Toe
              </button>
              <button 
                onClick={() => handleProjectClick('star-wars-planets', 'Star Wars Planets', false)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Star Wars Planets
              </button>
            </div>
          </div>
        )}
      </div>
      
      <Link to="/about" className="nav-link">About Me</Link>
      <Link to="/timeline" className="nav-link">Timeline</Link>
      <Link to="/social/linkedin" className="nav-link flex items-center">
      
        Social Handles
      </Link>
      
      <Link to="/resume" className="bg-black text-white px-6 py-2 rounded-full font-medium">
        Resume
      </Link>
    </>
  );

  return (
    <nav className="py-6 px-6 bg-white border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-bubble">Abdullah</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 py-4">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
