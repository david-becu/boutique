import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import './App.css';
import Pages from './components/Pages/Pages';

function App() {

  const [isDark, setIsDark] = useState(false);

  // Change la couleur de fond de la <div> principale en fonction du changement d'état de isDark
  const bgColor = isDark ? "App bg-dark text-white" : "App";
  
  // Change la couleur de fond du switch en fonction du changement d'état de isDark
  const bgColorLabel = isDark ? "form-check-label bg-dark text-white" : "form-check-label bg-white text-dark";
  
  // Change le texte du label en fonction du changement d'état de isDark
  const colorUI = isDark ? 'dark' : 'white';
    
  return (
    <>
      <div className={`${bgColor}`}>
        <div className="Switch">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isDark} onChange={()=>setIsDark(!isDark)}/>
            <label className={`${bgColorLabel}`} htmlFor="flexSwitchCheckChecked">{colorUI}</label>
          </div>
        </div>
        <Pages />
      </div>
    </>
  );
}

export default App;