import React from 'react'
import { useSelector } from 'react-redux';
import styles from "../pages/TopCocktails.module.css";
import arrow from "../img/arrow-left.png";
import { Link } from 'react-router-dom';

export default function TopCocktails() {

    const allDrinks = useSelector((state) => state.drinks)
    console.log(allDrinks);

    return (
        <div>
            <Link to="/Cocktail">
                <img className={styles.goBack} src={arrow} alt="goBack" />
            </Link>
            <h1>Cocktails</h1>
            {
                allDrinks.map((cocktail, index) => (
                    <article className={styles.articleAlldrinks}>
                        <h2 key={index}>{cocktail.strDrink}</h2>
                        <h3>{cocktail.strInstructions}</h3>
                        <h3>{cocktail.strIngredient1}</h3>
                        <h3>{cocktail.strIngredient2}</h3>
                        <h3>{cocktail.strIngredient3}</h3>
                        <h3>{cocktail.strIngredient4}</h3>
                        <h3>{cocktail.strIngredient5}</h3>
                        <img src={cocktail.strDrinkImage} className={styles.cocktailImg} alt="Cocktail" />
                    </article>

                ))
            }

        </div>
    )
}
