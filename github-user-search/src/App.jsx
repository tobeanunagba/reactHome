import React from 'react';
import './index.css';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        GitHub User Search Application
      </h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <Search />
      </div>
    </div>
  );
};

export default App;