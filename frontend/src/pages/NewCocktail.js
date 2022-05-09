import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addCocktail } from '../redux/actions'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "../pages/NewCocktail.module.css";
import arrow from "../img/arrow-left.png";

export default function NewCocktail() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [ingridiens, setIngridiens] = useState("");
    const [note, setNote] = useState("");
    let setAmount = 1;
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        const addDrink = { name, ingridiens, note };
        dispatch(addCocktail(addDrink, setAmount));
        navigate('/AddCocktail');
    }

    return (
        <>
            <Link to="/Cocktail">
                <img className={styles.goBack} src={arrow} alt="goBack" />
            </Link>
            <h1>Lägg till en ny drink</h1>

            <form onSubmit={handleAdd}>
                <input type="namn" placeholder="Fyll i namnet på din drink här" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="ingridienser" placeholder="Fyll i ingridienser här" value={ingridiens} onChange={(e) => setIngridiens(e.target.value)} />
                <input type="notering" placeholder="Notering" value={note} onChange={(e) => setNote(e.target.value)} />

                <button>Submit</button>
            </form>
        </>
    )
}
