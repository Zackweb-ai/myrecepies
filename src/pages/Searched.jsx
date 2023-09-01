import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams , Link } from 'react-router-dom';

export default function Searched() {
  const { search } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResult(data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <>
    <h3 className='title'>Search results:</h3>
    <div className='cards'>
      {result.map((meal) => (
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