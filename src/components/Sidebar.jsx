import React from 'react';
import { Link } from 'react-router-dom';
import navigationItems from '../utils/navigations';

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
      <div className="flex flex-col justify-between h-full">

        {/* Sidebar Header */}
        <div className="px-4 py-6 text-center border-b">
          <h1 className="text-xl font-bold leading-none">
            <span className="text-yellow-700">Task Manager</span> App
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 flex-grow">
          <ul className="space-y-1">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`flex items-center py-3 px-4 rounded-xl font-bold text-sm ${item.classNames}`}
                >
                  <img src={item.icon} alt={`${item.name} icon`} className="mr-4 w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button
            type="button"
            className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <span className="font-bold text-sm ml-2">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
