import React, { useState } from "react";
import Layout from "../layout/Layout";
import { FaCode } from "react-icons/fa";
import { VscThreeBars, VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const manuItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white/50 backdrop-blur-lg fixed w-full z-50 top-0 left-0 shadow-md border-b border-gray-200/50">
      <Layout>
        <nav className="navbar p-3 flex items-center justify-between relative">
          <h1 className="logo font-groote-regular text-2xl flex items-center z-50">
            <FaCode className="text-blue-600" />
            <span className="text-blue-900 ml-2">Port</span>
            <span className="text-gray-800">folio</span>
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 text-lg font-medium">
            {manuItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </a>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
            <a href="#contact">
              <button
                type="button"
                className="relative overflow-hidden cursor-pointer bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span className="relative z-10">Hire Me</span>
              </button>
            </a>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <VscClose size={28} className="text-gray-800" />
            ) : (
              <VscThreeBars size={28} className="text-gray-800" />
            )}
          </button>

          {/* Mobile Navigation Menu */}
          <div
            className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col pt-20 px-6">
              {manuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={closeMenu}
                  className="py-4 text-lg font-medium text-gray-700 hover:text-blue-600 hover:pl-2 transition-all duration-300 border-b border-gray-100"
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact">
                <button
                  type="button"
                  onClick={closeMenu}
                  className="mt-6 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 "
                >
                  Hire Me
                </button>
              </a>
            </div>
          </div>

          {/* Overlay */}
          {isMenuOpen && (
            <div
              onClick={closeMenu}
              className="fixed md:hidden inset-0 bg-black/50 backdrop-blur-sm"
              style={{ zIndex: -1 }}
            />
          )}
        </nav>
      </Layout>
    </div>
  );
};

export default Navbar;
