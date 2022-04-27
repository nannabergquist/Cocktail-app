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
    console.log(allDrinks[0]);


    return (
        <>
            <Link to="/Cocktail">
                <img className={styles.goBack} src={arrow} alt="goBack" />
            </Link>
            <h2>Snurrhjulet</h2>
            <p>Svårt att välja vilken cocktail du vill dricka idag? Testa gärna snurrhjulet!</p>
            <section className={styles.containerSpinn} onClick={handleSpin}>
                <button className={styles.spin} id="spin">Spin</button>
                <span className={styles.arrow}></span>
                <div className={styles.container} id="container">
                    <div className={styles.one}>1</div>
                    <div className={styles.two}>2</div>
                    <div className={styles.three}>3</div>
                    <div className={styles.four}>4</div>
                    <div className={styles.five}>5</div>
                    <div className={styles.six}>6</div>
                    <div className={styles.seven}>7</div>
                    <div className={styles.eight}>8</div>
                </div>
            </section>
            {
                allDrinks.map((cocktail, index) => (
                    <div>
                        <div className={styles.one} key={index}>{cocktail.strDrink}</div>
                        <div className={styles.two}>{cocktail.strDrink}</div>
                        <div className={styles.three}>{cocktail.strDrink}</div>
                        <div className={styles.four}>{cocktail.strDrink}</div>
                        <div className={styles.five}>{cocktail.strDrink}</div>
                        <div className={styles.six}>{cocktail.strDrink}</div>
                        <div className={styles.seven}>{cocktail.strDrink}</div>
                        <div className={styles.eight}>{cocktail.strDrink}</div>
                    </div>
                ))
            }
        </>
    )
}