import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import cocktail from "../img/drink.png";
import styles from "../pages/Welcomepage.module.css";

export default function Welcomepage() {


    return (
        <Link to="/Cocktail">
            <main className={styles.containerStart}>
                <h1>Welcome to Cocktails!</h1>
                <img src={cocktail} alt="Logo" />
            </main >
        </Link>
    )
}