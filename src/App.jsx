import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Reports from './components/Reports';
import Dashboard from './components/Dashboard';
import Blogs from './components/Blogs';

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className='flex bg-white dark:bg-gray-900'>
        <Sidebar sidebarToggle={sidebarToggle} />
        <div className={`${sidebarToggle ? '' : 'ml-64'} w-full mt-16`}>
          <div className={darkMode ? 'dark' : ''}>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
              <Navbar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
                search={search}
                setSearch={setSearch}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/users' element={<Users search={search} />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/blogs'element={<Blogs/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
