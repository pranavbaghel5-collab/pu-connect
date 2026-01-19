import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import FileRepository from './components/FileRepository';
import Announcements from './components/Announcements';
import Attendance from './components/Attendance';
import Profile from './components/Profile';
import { User } from './types';

const App: React.FC = () => {
  // Initialize user from storage (check local first, then session)
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const localSession = localStorage.getItem('uniconnect_active_session');
      if (localSession) return JSON.parse(localSession);
      
      const sessionSession = sessionStorage.getItem('uniconnect_active_session');
      if (sessionSession) return JSON.parse(sessionSession);
      
      return null;
    } catch (e) {
      console.error("Failed to parse session", e);
      return null;
    }
  });

  const handleLogin = (user: User, remember: boolean) => {
    if (remember) {
      localStorage.setItem('uniconnect_active_session', JSON.stringify(user));
    } else {
      sessionStorage.setItem('uniconnect_active_session', JSON.stringify(user));
    }
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('uniconnect_active_session');
    sessionStorage.removeItem('uniconnect_active_session');
    setCurrentUser(null);
  };

  const handleUpdateUser = (updates: Partial<User>) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, ...updates };
      setCurrentUser(updatedUser);
      
      // Update the active session in whichever storage it exists
      if (localStorage.getItem('uniconnect_active_session')) {
        localStorage.setItem('uniconnect_active_session', JSON.stringify(updatedUser));
      } else {
        sessionStorage.setItem('uniconnect_active_session', JSON.stringify(updatedUser));
      }
      
      // Also update the user in the permanent database (uniconnect_users)
      try {
        const allUsers = JSON.parse(localStorage.getItem('uniconnect_users') || '[]');
        const updatedAllUsers = allUsers.map((u: any) => 
          u.id === currentUser.id ? { ...u, ...updates } : u
        );
        localStorage.setItem('uniconnect_users', JSON.stringify(updatedAllUsers));
      } catch (e) {
        console.error("Failed to update user database", e);
      }
    }
  };

  const handleDeleteAccount = () => {
    if (currentUser) {
      try {
        const allUsers = JSON.parse(localStorage.getItem('uniconnect_users') || '[]');
        const updatedAllUsers = allUsers.filter((u: any) => u.id !== currentUser.id);
        localStorage.setItem('uniconnect_users', JSON.stringify(updatedAllUsers));
        handleLogout();
      } catch (e) {
        console.error("Failed to delete user", e);
      }
    }
  };

  return (
    <HashRouter>
      <Routes>
        <Route 
          path="/login" 
          element={!currentUser ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} 
        />
        
        <Route 
          path="/" 
          element={
            currentUser ? (
              <Layout user={currentUser} onLogout={handleLogout}>
                <Dashboard user={currentUser} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />
        
        <Route 
          path="/chat" 
          element={
            currentUser ? (
              <Layout user={currentUser} onLogout={handleLogout}>
                <Chat user={currentUser} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        <Route 
          path="/files" 
          element={
            currentUser ? (
              <Layout user={currentUser} onLogout={handleLogout}>
                <FileRepository user={currentUser} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        <Route 
          path="/announcements" 
          element={
            currentUser ? (
              <Layout user={currentUser} onLogout={handleLogout}>
                <Announcements user={currentUser} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        <Route 
          path="/attendance" 
          element={
            currentUser ? (
              <Layout user={currentUser} onLogout={handleLogout}>
                <Attendance user={currentUser} />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        <Route 
          path="/profile" 
          element={
            currentUser ? (
              <Layout user={currentUser} onLogout={handleLogout}>
                <Profile 
                  user={currentUser} 
                  onUpdateUser={handleUpdateUser} 
                  onDeleteAccount={handleDeleteAccount}
                />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          } 
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to={currentUser ? "/" : "/login"} />} />
      </Routes>
    </HashRouter>
  );
};

export default App;