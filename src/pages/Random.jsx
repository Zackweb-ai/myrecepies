import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Searched() {
  const [result, setResult] = useState([]);
  const [randomLetter, setRandomLetter] = useState("");

  const getRandomLetter = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const randomLetter = alphabet[randomIndex];
    return randomLetter; 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const letter = getRandomLetter(); // Get the random letter
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResult(data.meals);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };

    fetchData();
  }, []);
  if (result?.length > 0) {
    return (
        <>
        
        <h3 className='title'>Random Recipes:</h3>
        <div className='cards random'>
          {result?.slice(0,4)?.map((meal) => (
            <Link to={'/recipe/'+meal.idMeal} style={{ textDecoration: 'none' }}>
                <Card key={meal.idMeal} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={meal.strMealThumb} />
              <Card.Body>
                <Card.Title style={{ fontWeight:'600' }} className='title'>{meal.strMeal}</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          ))}
        </div>
        </>
      );
  }
 
}
