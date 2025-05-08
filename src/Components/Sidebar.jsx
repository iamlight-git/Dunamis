import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose, navItems }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-xl font-bold">Dunamis</h2>
        <button onClick={onClose} className="text-xl font-bold">
          &times;
        </button>
      </div>

      <ul className="p-4 space-y-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-2 py-2 rounded ${
                  isActive ? 'bg-secondary text-white' : 'hover:bg-gray-100'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
