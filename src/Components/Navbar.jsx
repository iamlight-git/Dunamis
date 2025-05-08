import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { navItems } from "../data/navItems";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 px-8">
          <a className="btn btn-ghost text-xl">Dunamis</a>
        </div>

        <div className="hidden md:flex gap-2 px-20">
          <ul className="flex justify-center items-center gap-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"} // 👈 only apply `end` to the Home route
                  className={({ isActive }) =>
                    `btn box-border text-center ${
                      isActive ? "btn-active btn-secondary" : "btn-ghost"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </ul>
        </div>

        {!isSidebarOpen && (
          <div className="md:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="btn btn-ghost text-xl"
            >
              &#9776;
            </button>
          </div>
        )}
      </div>

      {/* Sidebar for Mobile View */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Navbar;
