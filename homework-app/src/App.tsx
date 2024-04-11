import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginForm } from './components/LoginForm';

function App() {
  const loginUrl = 'http://localhost:7777/api/login';

  return (
    <div className="App">
      <LoginForm loginUrl={loginUrl}/>
    </div>
  );
}

export default App;
