import React, { useEffect, useState } from "react";
import styled from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://foodlists-1374a-default-rtdb.firebaseio.com/meals.json"
        );

        if (response.status !== 200) {
          throw new Error("Unable to Fetch Data");
        }

        const data = await response.json();

        const loadedMeals = [];

        for (const id in data) {
          loadedMeals.push({
            id: id,
            name: data[id].name,
            description: data[id].description,
            price: data[id].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styled.MealsLoading}>
        <p>loading...</p>
      </section>
    );
  }
  if (hasError) {
    return (
      <section className={styled.MealsError}>
        <p>{hasError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={styled.meals}>
      <Card>
        <ul>{meals && mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
