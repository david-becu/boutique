import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';
import './App.css';
import Pages from './components/Pages/Pages';

function App() {

  const [isDark, setIsDark] = useState(false);
  const bgColor = isDark ? "App bg-dark text-white" : "App";
   
  return (
    <>
      <body className={`${bgColor}`}> 
        <Pages />
      </body>
    </>
  );
}

export default App;
