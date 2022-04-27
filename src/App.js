import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Cocktail from './pages/Cocktail';
import Welcomepage from './pages/Welcomepage';
import NewCocktail from './pages/NewCocktail';
import ChooseCocktail from './pages/ChooseCocktail';
import AddCocktail from './pages/AddCocktail';
import { addInitialCocktails } from './redux/actions';
import { useDispatch } from 'react-redux';
import TopCocktails from './pages/TopCocktails';

function App() {
  const [cocktails, setCocktails] = useState([]);
  const dispatch = useDispatch();

  const url = 'http://localhost:5000/cocktail.json';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCocktails(data.drinks))
  }, [])

  useEffect(() => {
    dispatch(addInitialCocktails(cocktails))
  }, [cocktails])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcomepage />} />
        <Route path='/Cocktail' element={<Cocktail />} />
        <Route path='/Newcocktail' element={<NewCocktail />} />
        <Route path='/ChooseCocktail' element={<ChooseCocktail />} />
        <Route path='/AddCocktail' element={<AddCocktail />} />
        <Route path="/TopCocktails" element={<TopCocktails />} cocktails={cocktails} />
      </Routes>
    </Router>
  );
}

export default App;
