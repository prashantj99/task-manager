import React, { useState, useEffect } from 'react';
import { getTasksByDueDate } from '../utils/storage';
import TaskList from './TaskList';

const UpcomingTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(getTasksByDueDate(false)); // Fetch upcoming tasks
    };

    useEffect(() => {
        refreshTasks(); // Refresh tasks on mount
    }, []);

    return (
        <div className="bg-yellow-50 min-h-screen py-10 px-6">
            {/* Main container with some spacing and max-width for center alignment */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">

                {/* Section Title */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                    Upcoming Tasks
                </h2>

                {/* Display message if no tasks are available */}
                {tasks.length === 0 ? (
                    <div className="text-center text-gray-500 p-10">
                        <h3 className="text-xl font-semibold mb-3">You're free now! 😊</h3>
                        <p>It seems you have no upcoming tasks. Add some tasks to get started!</p>
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

export default UpcomingTasks;
