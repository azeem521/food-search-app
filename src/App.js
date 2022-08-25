
import './App.css';

import React, {useState} from 'react';

import Axios from 'axios'
import RecipeTiles from './RecipeTiles';

function App() {

  const [query, setquery] = useState('')
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, setHealthLabels] = useState('vegan')

  const YOUR_APP_ID = "f64af06b"
  const YOUR_APP_KEY = "970ad4a75f3dd63687c8243d7ba83c91"

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabels}`

  async function getReceipe () {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits)
  }

  const submit = (e) => {
    e.preventDefault();
    getReceipe();
    setquery('')
  }
 

  return (
    <div className="app">
      <h1>Food Recipe Plaza </h1>
      <form className="app__searchForm" onSubmit={submit}>
        <input className='app__input' type="text" placeholder='enter ingredient'
        value={query} 
         onChange={(e)=>setquery(e.target.value)} />
        <input className='app__submit' type="submit" value='search' />

        <select className='app__healthLabels'>
          <option onClick={()=>setHealthLabels('vegan')}>Vegan</option>
          <option onClick={()=>setHealthLabels('vegetarian')}>Vegetarian</option>
          <option onClick={()=>setHealthLabels('dairy-free')}>Dairy-free</option>
          <option onClick={()=>setHealthLabels('wheat-free')}>Wheat-free</option>
          <option onClick={()=>setHealthLabels('fat-free')}>Fat-free</option>
          <option onClick={()=>setHealthLabels('low-sugar')}>low-sugar</option>
        </select>
      </form>

    <div className='app__recipes'>
      {recipes.map(recipe=>{
        return <RecipeTiles recipe = {recipe} />
      })}
    </div>

    </div>
  );
}

export default App;
