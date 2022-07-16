import React from 'react';
import './App.css';
import Header from './Header';
import RecomendedVideos from './RecomendedVideos';
import Sidebar from './Sidebar';



function App() {
  return (
    <div className="app">
      
          <Header />
             
      <div className="app-page">
          <Sidebar />
          <RecomendedVideos />
        </div>

    </div>
  );
}

export default App;
