import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import OverdueTasks from './components/OverdueTasks';
import UpcomingTasks from './components/UpcomingTasks';
import Trash from './components/Trash';
import TodayPlan from './components/TodayPlan';
import { useEffect } from 'react';
import { initializeDummyTask } from './utils/storage';

const App = () => {
  useEffect(()=>{
    initializeDummyTask();
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path='/' element={<TodayPlan/>} />
          <Route path='/overdue' element={<OverdueTasks />} />
          <Route path='/upcomming' element={<UpcomingTasks />} />
          <Route path='/trash' element={<Trash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
