import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Characters from './components/Characters.jsx';
import LogIn from './components/LogIn.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(`Characters`);

  function clickHome() {
    setCurrentPage('Home');
  };

  function clickCharacters() {
    setCurrentPage('Characters');
  };

  function clickLogIn() {
    setCurrentPage('LogIn');
  }

  return (
    <div>
      <Header goToHome={clickHome} goToCharacters={clickCharacters} goToLogIn={clickLogIn} />
      {(currentPage===`Home`) ? <Home /> : ''}
      {(currentPage===`Characters`) ? <Characters /> : ''}
      {(currentPage===`LogIn`) ? <LogIn /> : ''}
      <Footer />
    </div>
  )
}

export default App
