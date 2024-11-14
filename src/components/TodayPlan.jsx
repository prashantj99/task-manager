import React, { useEffect, useState } from 'react';
import { getTasks, addTask } from '../utils/storage';
import TaskModal from './TaskModal';
import TodayTasks from './TodayTasks';
import TaskSearchFilter from './TaskSearchFilter';

const TodayPlan = () => {
    const today = new Date();
    const [todayTasks, setTodayTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [tasksFinished, setTasksFinished] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const refreshTasks = () => {
        const tasks = getTasks();
        setTasksFinished(tasks.filter(task => Number(task.status) === 1).length);
        setTodayTasks(tasks.filter(task => {
            return new Date(task.dueDate).toDateString() === new Date().toDateString() && Number(task.status) === 0;
        }));
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    // Toggle modal visibility
    const toggleModal = () => setShowModal(!showModal);

    // Save a new task from the modal
    const handleSaveTask = (newTask) => {
        addTask(newTask);
        refreshTasks();
    };

    return (
        <main className="bg-gray-50 pt-16 max-h-screen overflow-auto">
            <div className="px-6 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 mb-5 shadow-lg">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">Hi Prashant👋, welcome back 🎉🎉</h1>
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center justify-between">
                                <div className="text-gray-500 text-sm">Task Progress Overview</div>
                                <div className="w-full ml-4 bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-green-500 h-2.5 rounded-full"
                                        style={{ width: `${(tasksFinished / todayTasks.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex items-center gap-x-2">
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                                >
                                    Search & Filter
                                </button>
                                {isFilterOpen && <TaskSearchFilter setIsFilterOpen={setIsFilterOpen} />}
                            </div>
                        </div>

                        <hr className="my-8" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Stats</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <div className="p-6 bg-green-100 rounded-xl shadow-md">
                                            <div className="font-bold text-xl text-gray-800 leading-none">Good day, <br />Prashant</div>
                                            <div className="mt-5">
                                                <button
                                                    onClick={toggleModal}
                                                    type="button"
                                                    className="inline-flex items-center justify-center py-2 px-4 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                                                >
                                                    Start tracking
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-yellow-100 rounded-xl text-gray-800 shadow-md">
                                        <div className="font-bold text-2xl leading-none">{tasksFinished}</div>
                                        <div className="mt-2 text-sm">Tasks finished</div>
                                    </div>
                                    <div className="p-6 bg-yellow-100 rounded-xl text-gray-800 shadow-md">
                                        <div className="font-bold text-2xl leading-none">5.5</div>
                                        <div className="mt-2 text-sm">Tracked hours</div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="p-6 bg-purple-100 rounded-xl text-gray-800 shadow-md">
                                            <div className="font-bold text-xl leading-none">Your daily plan</div>
                                            <div className="mt-2 text-sm">{todayTasks.filter(task => task.status === 1).length} of {todayTasks.length} completed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Your tasks today</h2>
                                <div className="space-y-6">
                                    <TodayTasks todayTasks={todayTasks} refreshTasks={refreshTasks} />
                                    {showModal && (
                                        <TaskModal
                                            task={{ title: '', description: '', dueDate: today, priority: '2', status: 0 }}
                                            onSave={handleSaveTask}
                                            onClose={toggleModal}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TodayPlan;
