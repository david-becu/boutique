import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pages from './components/Pages/Pages';

function App() {

  const [isDark, setIsDark] = useState(false);
  <NavBar isDark={isDark} setIsDark={setIsDark} />

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Pages />
    </>
  );
}

export default App;