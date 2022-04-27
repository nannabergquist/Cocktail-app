import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../pages/Cocktail.module.css'
import twoCocktails from '../img/cheers.png';

export default function Cocktail() {


    return (
        <main className={styles.mainSec}>
            <section>
                <h1>Cocktails</h1>
            </section>
            <button className={styles.linkNewCocktail}>
                <Link to="/NewCocktail">
                    <h3 className={styles.linkText}>Lägg till en ny drink</h3>
                </Link>
            </button>
            <section className={styles.linkChooseCocktail}>
                <Link to="/ChooseCocktail">
                    <h3 className={styles.linkText}>Snurrhjulet</h3>
                </Link>
            </section>
            <section className={styles.linkTopCocktails}>
                <Link to="/TopCocktails">
                    <h3 className={styles.linkText}>Se alla drinkar</h3>
                </Link>
            </section>

            <img src={twoCocktails} alt="cheers" />
        </main>
    )
}