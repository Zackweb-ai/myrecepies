import React, { useEffect, useState } from "react";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Slide1() {
  useEffect(() => {
    firstSlide();
  },[]);
  const [recipes, setRecipes] = useState([]);

  const firstSlide = async () => {
    try {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c&number=9");
      if (!api.ok){
        throw new Error('Network response was not ok');
      }
      const data = await api.json();
    setRecipes(data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
    
  };

  return (
  <div className="slide1">
    <Splide
    options={ {
      width:1000,
      perPage:4,
      rewind: true,
      gap:'1rem',
      breakpoints: {
        1200: { perPage: 2, gap: '1rem', width: 490,pagination:false },
        640 : { perPage: 1, gap: 0,width: 390,pagination:false },
      },
    } }
    >
    {recipes.map((recipe) => {
    return (
      <SplideSlide key={recipe.idMeal}>
      <Link to={'/recipe/'+recipe.idMeal} style={{ textDecoration: 'none' }}>
      <Container>
        <img className="slideImage" src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p className="stitle">{recipe.strMeal}</p>
        </Container>
      </Link>
      </SplideSlide>
    );

  })
}
  </Splide>
  </div>
   

)
}
