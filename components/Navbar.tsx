"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "AI", href: "#ai" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        shadow
          ? "bg-[#050816]/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-20">

        <a
          href="#"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
        >
          GN
        </a>

        <div className="hidden md:flex gap-8">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {item.name}
            </a>
          ))}

        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-[#0b1024]">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-8 py-4 border-b border-gray-800 hover:bg-blue-500/10"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}