import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import TodayPlan from './TodayPlan';

const Dashboard = () => {
    return (
        <div className='relative bg-yellow-50 overflow-hidden max-h-screen'>
            <Sidebar />
            <div className="bg-yellow-50 flex-col ">
                <Header />
                {/* <MainContent /> */}
                <TodayPlan />
            </div>
        </div>
    );
}

export default Dashboard;
