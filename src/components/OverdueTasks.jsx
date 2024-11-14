import React, { useState, useEffect } from 'react';
import { getOverdueTasks } from '../utils/storage';
import TaskList from './TaskList';

const OverdueTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(getOverdueTasks()); // Fetch overdue tasks
    };

    useEffect(() => {
        refreshTasks(); // Fetch overdue tasks when the component mounts
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50">
            {/* Section Header */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overdue Tasks</h2>

                {/* Display message if no tasks are available */}
                {tasks.length === 0 ? (
                    <div className="text-center text-gray-500 p-10">
                        <h3 className="text-xl font-semibold mb-3">No overdue tasks yet!</h3>
                        <p>It seems you have no overdue tasks. Go ahead and stay on top of your tasks!</p>
                    </div>
                ) : (
                    // Overdue Task List Component if tasks exist
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

export default OverdueTasks;
