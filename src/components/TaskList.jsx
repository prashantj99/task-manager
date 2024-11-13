import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { updateTask, moveToTrash } from '../utils/storage';

const TaskList = ({ tasks, refreshTasks, handleClearTrash }) => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle task deletion
    const handleDelete = (taskId) => {
        moveToTrash(taskId);
        refreshTasks();
    };

    // Handle task edit button click
    const handleEdit = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    // Handle task save after modal close
    const handleSave = (updatedTask) => {
        updateTask(updatedTask);
        refreshTasks();
    };

    // Handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {tasks ? tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={handleClearTrash || handleDelete}
                    onEdit={handleEdit}
                />
            )) : "No Task Found!!!"
            }

            {isModalOpen && (
                <TaskModal
                    task={selectedTask}
                    onSave={handleSave}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default TaskList;
