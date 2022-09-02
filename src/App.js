import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import CategoryCard from './components/CategoryCard/CategoryCard';
import Pages from './components/Pages/Pages';

function App() {
  return (
    <>
      <Pages/>
      <CategoryCard/>
    </>
  );
}

export default App;
