import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { getTasks } from '../utils/storage';

const ThisWeekTasks = () => {
    const [weeklyTasks, setWeeklyTasks] = useState([]);

    const refreshTasks = () => {
        const tasks = getTasks();
        const now = new Date();

        // Calculate start and end dates of the current week
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay()); // Start of week (Sunday)
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // End of week (Saturday)

        const filteredTasks = tasks.filter(task => {
            const taskDueDate = new Date(task.dueDate);
            return taskDueDate >= startOfWeek && taskDueDate <= endOfWeek && Number(task.status) === 0;
        });

        setWeeklyTasks(filteredTasks);
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="bg-yellow-50 min-h-screen py-10 px-6">
            {/* Container for centering the content */}
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">

                {/* Section Header */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    This Week's Tasks
                </h2>

                {/* Display message if no tasks are available */}
                {weeklyTasks.length > 0 ? (
                    <TaskList tasks={weeklyTasks} refreshTasks={refreshTasks} />
                ) : (
                    <div className="text-center text-gray-500 p-10">
                        <h3 className="text-xl font-semibold mb-3">No tasks due this week</h3>
                        <p>It seems you have no tasks due this week. Enjoy your free time!</p>
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

export default ThisWeekTasks;
