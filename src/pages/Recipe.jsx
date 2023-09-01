import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function RecipeDetail() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let { id } = useParams();

  const fetchRecipe = async () => {
    try {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (!api.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await api.json();
      setRecipe(data.meals[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, [id]);


  return (
    <div className='recipe'>
        <div className='part'>
            <img className='rcimg' src={recipe.strMealThumb} alt="" />
        </div>
        <div className='part marginTop'>
        <p style={{fontWeight:700}} className="title">{recipe.strMeal}</p>
        <h5>Ingredients:</h5>
        <ul>
            {recipe?.strIngredient1 && (
              <li>{`${recipe.strIngredient1} - ${recipe.strMeasure1}`}</li>
            )}
            {recipe?.strIngredient2 && (
              <li>{`${recipe.strIngredient2} - ${recipe.strMeasure2}`}</li>
            )}
            {recipe?.strIngredient3 && (
              <li>{`${recipe.strIngredient3} - ${recipe.strMeasure3}`}</li>
            )}
            {recipe?.strIngredient4 && (
              <li>{`${recipe.strIngredient4} - ${recipe.strMeasure4}`}</li>
            )}
            {recipe?.strIngredient5 && (
              <li>{`${recipe.strIngredient5} - ${recipe.strMeasure5}`}</li>
            )}
          </ul>
        <h5>Instructions:</h5>
            <p dangerouslySetInnerHTML={{ __html: recipe?.strInstructions }}></p>
        </div>

    </div>
  );
}
