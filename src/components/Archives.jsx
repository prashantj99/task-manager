import React, { useState, useEffect } from 'react';
import TaskList from './TaskList'; 
import { getTasks } from '../utils/storage'; 

const Archives = () => {
    const [archivedTasks, setArchivedTasks] = useState([]);

    const refreshTasks = () => {
        const tasks = getTasks();
        const archived = tasks.filter(task => Number(task.status) === 1); // Filter archived tasks
        setArchivedTasks(archived);
    };

    useEffect(() => {
        refreshTasks(); // Fetch archived tasks on mount
    }, []);

    return (
        <div className="bg-yellow-50 min-h-screen py-10 px-6">
            {/* Main container */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                
                {/* Section Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Archived Tasks
                </h2>

                {/* Display Archived Tasks or Empty State */}
                {archivedTasks.length > 0 ? (
                    <TaskList tasks={archivedTasks} refreshTasks={refreshTasks} />
                ) : (
                    <div className="text-center text-gray-500 p-10">
                        <h3 className="text-xl font-semibold mb-3">No Archived Tasks</h3>
                        <p>Your archived tasks will appear here once you archive some tasks.</p>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Archives;
