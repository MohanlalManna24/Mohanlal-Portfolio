import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <footer className="left-0 z-20 w-full p-4 bg-linear-to-br border-t-2 border-gray-300 from-slate-50 to-blue-50 md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-body sm:text-center">
        © {year}{" "}
        <a href="https://mohanlalmanna.com/" className="hover:underline">
          Mohanlal Mannna
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
          <a href="#home" className="hover:underline me-4 md:me-6">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline me-4 md:me-6">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
