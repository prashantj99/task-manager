import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    
    return (
        <div className='relative bg-yellow-50 overflow-hidden max-h-screen'>
            <Sidebar />
            <div className="bg-yellow-50 flex-col ml-60">
                <Header />
                <div className='overflow-y-auto max-h-[calc(100vh-0px)] min-h-[calc(100vh-0px)]'>
                    {/* Outlet is now scrollable when content exceeds the available space */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
