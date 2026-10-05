import { AudioWaveform } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();
  const activeIndicator = (path: string) => {
    pathname === path
      ? "text-slate-600 font-semibold border-slate-400 border-b-2"
      : "";
  };

  return (
    <nav className="text-white flex justify-between items-center p-6 px-8 mt-6 mx-2 md:mx-4 gap-10 fixed left-0 right-0 border border-white/10 bg-black/90 rounded-lg shadow-2xl">
      <Link to="/">
        <AudioWaveform className="w-6 h-6 md:w-10 md:h-10 text-xl font-bold" />
      </Link>

      <div className="hidden md:flex gap-12 font-poppins font-bold text-sm md:text-lg">
        <Link
          to="/discover"
          className={`hover:text-slate-400 active:text-slate-500 ${activeIndicator("/discover")}`}
        >
          Discover
        </Link>
        <Link
          to="/spotlight"
          className={`hover:text-slate-400 active:text-slate-500 ${activeIndicator("/spotlight")}`}
        >
          SpotLight
        </Link>
        <Link
          to="/freshdrops"
          className={`hover:text-slate-400 active:text-slate-500 ${activeIndicator("/freshdrops")}`}
        >
          FreshDrops
        </Link>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-center itens-center md:hidden cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="flex md:hidden flex-col absolute text-left z-50 right-0 px-6 py-8 left-0 top-20 gap-6 mx-2 border border-white/10 shadow-2xl bg-black/80 backdrop-blur-xl rounded-lg">
          <Link
            to="/discover"
            className="hover:text-slate-500 active:text-slate-600 font-medium font-poppins"
            onClick={toggleNavbar}
          >
            Discover
          </Link>
          <Link
            to="/spotlight"
            className="hover:text-slate-500 active:text-slate-600 font-medium font-poppins"
            onClick={toggleNavbar}
          >
            SpotLight
          </Link>
          <Link
            to="/freshdrops"
            className="hover:text-slate-500 active:text-slate-600 font-medium font-poppins"
            onClick={toggleNavbar}
          >
            FreshDrops
          </Link>
        </div>
      )}
    </nav>
  );
}
