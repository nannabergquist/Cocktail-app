import React from 'react'
import { useSelector } from "react-redux";
import { deleteCocktail } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../pages/AddCocktail.module.css';
import arrow from "../img/arrow-left.png";

const AddCocktail = () => {
    const dispatch = useDispatch();

    //retunerar hela statet, så du lägger till i din lista. 
    const copyState = useSelector(state => state.drinks)


    //hela state längden + nya statet
    let index = copyState.length - 1
    console.log(copyState);

    function deleteDrink() {
        dispatch(deleteCocktail(copyState[index]));
        document.getElementById('hideMain').style.display = 'none';
    }

    return (
        <main>
            <Link to="/Cocktail">
                <img className={styles.goBack} src={arrow} alt="goBack" />
            </Link>
            <h2>Sparade cocktails</h2>
            <section id='hideMain'>
                <h3>The new drink, <span> {copyState[index].name} </span>  is registred.</h3>
                <h4>Ingridienser: {copyState[index].ingridiens} </h4>
                <h4>Notering: {copyState[index].note}</h4>
                <h4>Ångrat dig? Du kan enkelt radera här.</h4>
                <button onClick={deleteDrink}>Radera drink</button>
            </section>
        </main>

    )
}

export default AddCocktail
