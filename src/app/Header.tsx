import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-purple-400 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">AqsaAura</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
