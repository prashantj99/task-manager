import React, { useState, useEffect } from 'react';
import { filterTasksByStatus, clearTrash, permanentDeleteTask } from '../utils/storage';
import TaskList from './TaskList';

const Trash = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(filterTasksByStatus(-1)); // -1 to filter tasks in trash
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    const handleClearTrash = () => {
        if (window.confirm("Are you sure you want to empty the trash? This action cannot be undone.")) {
            clearTrash();
            refreshTasks();
        }
    };

    const deleteTask = (taskId) => {
        if (window.confirm("Are you sure you want to delete this Task? This action cannot be undone.")) {
            permanentDeleteTask(taskId);
            refreshTasks();
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-900">Trash Items</h2>
                <button
                    onClick={handleClearTrash}
                    className="px-5 py-3 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300"
                >
                    Clear All
                </button>
            </div>

            {/* Trash Empty State */}
            {tasks.length === 0 ? (
                <div className="text-center text-gray-500 p-10">
                    <h3 className="text-xl font-semibold mb-3">Your trash is empty</h3>
                    <p>It seems you have no deleted tasks. Go ahead and add some tasks to your to-do list!</p>
                </div>
            ) : (
                <TaskList
                    refreshTasks={refreshTasks}
                    tasks={tasks}
                    permanentDeleteTask={deleteTask}
                />
            )}

            {/* Footer */}
            <div className="mt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Trash;
