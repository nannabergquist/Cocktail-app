import React from 'react'
import styles from "../pages/ChooseCocktail.module.css";
import { useSelector } from "react-redux";
import arrow from "../img/arrow-left.png";
import { Link } from 'react-router-dom';

export default function ChooseCocktail() {
    function handleSpin() {
        let container = document.getElementById("container");
        let btn = document.getElementById("spin");
        let number = Math.ceil(Math.random() * 1000);

        container.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 1000);

    }

    const allDrinks = useSelector((state) => state.drinks)
    console.log(allDrinks);

    if (allDrinks) {

        return (
            <>
                <div>
                    <Link to="/Cocktail">
                        <img className={styles.goBack} src={arrow} alt="goBack" />
                    </Link>
                    <h2>Snurrhjulet</h2>
                    <p>Svårt att välja vilken cocktail du vill dricka idag? Testa gärna snurrhjulet!</p>
                    <section className={styles.containerSpinn} onClick={handleSpin}>
                        <button className={styles.spin} id="spin">Spin</button>
                        <span className={styles.arrow}></span>
                        <div className={styles.container} id="container">
                            <div className={styles.one}>{allDrinks[0].strDrink}</div>
                            <div className={styles.two}>{allDrinks[1].strDrink}</div>
                            <div className={styles.three}>{allDrinks[2].strDrink}</div>
                            <div className={styles.four}>{allDrinks[3].strDrink}</div>
                            <div className={styles.five}>{allDrinks[4].strDrink}</div>
                            <div className={styles.six}>{allDrinks[5].strDrink}</div>
                            <div className={styles.seven}>{allDrinks[6].strDrink}</div>
                            <div className={styles.eight}>{allDrinks[7].strDrink}</div>
                        </div>
                    </section>
                </div>
            </>
        )
    } else {
        return null
    }
}