import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


export default function Slide2() {

useEffect(()=>{
    secondSlide();
},[])
const [recipes, setRecipes] = useState([]);

const secondSlide = async () => {

try {
const api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
  if (!api.ok) {
  throw new Error('Network response was not ok');
}
const data = await api.json();
setRecipes(data.meals);
} catch (error) {
  console.error('Error fetching data:', error);
}
}
  return (

<div className="slide2">
    <Splide
    options={ {
      width:800,
      perPage:3,
      rewind: true,
      gap:'3rem',
      breakpoints: {
        1200: { perPage: 2, gap: '1rem', width: 490,pagination:false },
        640 : { perPage: 1, gap: 0, width: 390,pagination:false},
        

      },
    } }
    >
    {recipes.map((recipe) => {
    return (
      <SplideSlide key={recipe.idMeal}>
      <Link to={'/recipe/'+recipe.idMeal} style={{ textDecoration: 'none' }}>
      <div>
        <img className="slideImage" src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p className='stitle'>{recipe.strMeal}</p>
      </div>
      </Link>
      </SplideSlide>
    );

  })
}
  </Splide>
  </div>
    
  )
}
