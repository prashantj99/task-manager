import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-64 right-0 bg-yellow-50 shadow-md py-4 px-6 h-16 z-10">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                {/* Archive Button */}
                <button
                    onClick={() => navigate('/archives')}
                    className="flex items-center text-gray-700 font-semibold hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                    <span className="inline-flex items-center w-8 h-8 text-xs bg-white rounded-full mr-3 shadow-md hover:shadow-lg transition-all duration-200">
                        <img src='/back-svgrepo-com.svg' alt='back' className='h-5 w-5' />
                    </span>
                    <span className="hidden sm:block">Archive</span>
                </button>

                {/* Title */}
                <h1 className="text-2xl font-extrabold text-gray-800">Task Manager</h1>

                {/* This Week Button */}
                <button
                    onClick={() => navigate('/thisweek')}
                    className="flex items-center text-gray-700 font-semibold hover:text-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                    <span className="hidden sm:block">This Week</span>
                    <span className="inline-flex items-center w-8 h-8 bg-white rounded-full ml-3 shadow-md hover:shadow-lg transition-all duration-200">
                        <img src='/right-arrow-svgrepo-com.svg' alt='Right' className='h-5 w-5' />
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
