import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import navigationItems from '../utils/navigations';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed inset-y-0 left-0 bg-white shadow-xl w-64 flex flex-col">
      {/* Sidebar Header */}
      <div className="px-6 py-8 text-center bg-yellow-100 shadow-sm">
        <h1 className="text-2xl font-bold text-yellow-600">
          Task<span className="text-gray-800">Manager</span>
        </h1>
        <p className="text-sm text-gray-500 mt-2">Organize Your Tasks Efficiently</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`flex items-center p-3 rounded-lg font-medium transition ${
                    isActive
                      ? 'bg-yellow-200 text-yellow-800 shadow-md'
                      : 'text-gray-600 hover:bg-yellow-100 hover:text-yellow-700'
                  }`}
                >
                  <img src={item.icon} alt={`${item.name} icon`} className="mr-3 w-5 h-5" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-6 border-t">
        <button
          type="button"
          onClick={() => {
            // Show a confirmation prompt
            const confirmLogout = window.confirm("Are you sure you want to log out? Your whole data would be deleted from this Browser!!");
            
            // If the user confirms, clear local storage
            if (confirmLogout) {
              localStorage.removeItem('tasks');
              window.location.reload(); 
            }
          }}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-red-500 hover:text-white transition duration-200 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
