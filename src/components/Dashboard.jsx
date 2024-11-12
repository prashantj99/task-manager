import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
    return (
        <div className='relative bg-yellow-50 overflow-hidden max-h-screen'>
            <Sidebar />
            <div className="bg-yellow-50 flex-col ">
                <Header />
                <MainContent />
            </div>

        </div>
    );
}

export default Dashboard;
