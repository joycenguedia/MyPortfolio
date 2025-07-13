'use client';

import React, { useState } from 'react';

interface DropdowncertificationProps {
  certifications: string[]; // List of certifications
  buttonText: string; // Text for the button to toggle the dropdown
}

const Dropdowncertification: React.FC<DropdowncertificationProps> = ({
  certifications,
  buttonText,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
      >
        {buttonText}
      </button>

      {/* Dropdown items (appear when isOpen is true) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="py-1">
            {certifications.map((certification, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {certification}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdowncertification;
