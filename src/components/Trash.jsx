import React, { useState, useEffect } from 'react';
import { filterTasksByStatus, clearTrash } from '../utils/storage';
import TaskCard from './TaskCard';
import TaskList from './TaskList';

const Trash = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(filterTasksByStatus(-1));
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

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50 mt-10">
            {/* {tasks.map(task => <TaskCard key={task.id} task={task} onDelete={handleClearTrash} />)} */}
            <TaskList refreshTasks={refreshTasks} tasks={tasks} handleClearTrash={handleClearTrash}/>
        </div>
    );
};

export default Trash;
