import React, { useState, useEffect } from 'react';
import { getTasksByDueDate} from '../utils/storage';
import TaskList from './TaskList';

const UpcomingTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(getTasksByDueDate(false));
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50">
            <TaskList tasks={tasks} refreshTasks={refreshTasks} />
        </div>
    );
};
export default UpcomingTasks;
