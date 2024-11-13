import React, { useState } from 'react';

const TaskModal = ({ task, onSave, onClose }) => {
    const [updatedTask, setUpdatedTask] = useState({
        ...task,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
        dueTime: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[1].slice(0, 5) : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!updatedTask.dueDate || !updatedTask.dueTime) {
            alert('Time & Date is Mandatory!!!');
            return;
        }
        const fullDueDate = `${updatedTask.dueDate}T${updatedTask.dueTime}:00`;

        const taskToSave = {
            ...updatedTask,
            dueDate: new Date(fullDueDate).toISOString(),
            lastUpdate: new Date().toISOString(),
        };
        onSave(taskToSave);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 mx-4">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Track Task</h2>

                <input
                    type="text"
                    name="title"
                    value={updatedTask.title}
                    onChange={handleChange}
                    placeholder="Task Title"
                    className="w-full border border-gray-300 rounded-none px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <textarea
                    name="description"
                    value={updatedTask.description}
                    onChange={handleChange}
                    placeholder="Task Description"
                    className="w-full border border-gray-300 rounded-none px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="4"
                />

                <input
                    type="date"
                    name="dueDate"
                    value={updatedTask.dueDate}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-none px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <input
                    type="time"
                    name="dueTime"
                    value={updatedTask.dueTime}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-none px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <select
                    name="priority"
                    value={updatedTask.priority}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-none px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>

                <select
                    name="status"
                    value={updatedTask.status}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-none px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <option value="0">UnDone</option>
                    <option value="1">Completed</option>
                    <option value="-1">Trash</option>
                </select>

                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-500 text-white rounded-none hover:bg-green-600 transition"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-none hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
