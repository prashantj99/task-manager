import React, { useState, useEffect } from 'react';
import { filterTasksByStatus } from '../utils/storage';
import TaskList from './TaskList';

const CompletedTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(filterTasksByStatus(1)); // Filter completed tasks by status
    };

    useEffect(() => {
        refreshTasks(); // Fetch completed tasks on component mount
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                {/* Section Header */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">Completed Tasks</h2>

                {/* Display message if no tasks are available */}
                {tasks.length === 0 ? (
                    <div className="text-center text-gray-500 p-10">
                        <h3 className="text-xl font-semibold mb-3">No completed tasks yet!</h3>
                        <p>It seems you haven't completed any tasks. Go ahead and start marking them as completed!</p>
                    </div>
                ) : (
                    // Task List Component if tasks exist
                    <TaskList tasks={tasks} refreshTasks={refreshTasks} />
                )}
            </div>
            {/* Footer with copyright */}
            <div className="mt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default CompletedTasks;
