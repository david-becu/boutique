import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pages from './components/Pages/Pages';

function App() {

  const [isDark, setIsDark] = useState(false);
  const bgMain = isDark ?  'container-fluid d-flex justify-content-evenly bg-dark': 'container-fluid d-flex justify-content-evenly bg-light' ;

  
  return (
    <div className='bg-light text-dark'>
      <header>
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      </header>
      <main className={`${bgMain}`}>
      <Pages />
      </main>
    </div>
  );
}

export default App;