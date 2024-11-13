import React, { useState, useEffect } from 'react';
import TaskList from './TaskList'; 
import { getTasks } from '../utils/storage'; 

const Archives = () => {
    const [archivedTasks, setArchivedTasks] = useState([]);
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        const tasks = getTasks();
        const archived = tasks.filter(task => task.status === 1);
        setArchivedTasks(archived);
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50 mt-6">
            {archivedTasks.length > 0 ? (
                <TaskList tasks={archivedTasks} refreshTasks={refreshTasks} />
            ) : (
                <p className="text-gray-500 text-center">No archived tasks available.</p>
            )}
        </div>
    );
};

export default Archives;
