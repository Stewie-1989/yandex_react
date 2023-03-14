import AppHeader from "../appheader/AppHeader";
import BurgerIngredients from "../burgeringredients/BurgerIngredients";
import BurgerConstructor from "../burgerconstructor/BurgerConstructor";
import React from "react";
import './modules.css'
import PropTypes from "prop-types";

export default function Application({data}) {
    const [dataBurgers, setDataBurgers] = React.useState([])

    const setDataBurger = (value) => {
        setDataBurgers([...dataBurgers, value]);
    }

    const deleteIngredient = (value, id) => {
        setDataBurgers([...dataBurgers.slice(0, value), ...dataBurgers.slice(value + 1)]);
    }

    return (
        <section>
            <AppHeader/>
            <section className="menu">
                <ul>
                    <BurgerIngredients state={data} dataBurger={setDataBurger} dataBurgers={dataBurgers}/>
                </ul>
                <ul className="ml-10">
                    <section className="display-contents">
                        <BurgerConstructor dataBurgers={dataBurgers} deleteIngredients={deleteIngredient}/>
                    </section>
                </ul>
            </section>
        </section>
    )
}

Application.propTypes = {
    data: PropTypes.shape({
        isLoading: PropTypes.bool.isRequired,
        hasError: PropTypes.bool.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            calories: PropTypes.number.isRequired,
            carbohydrates: PropTypes.number.isRequired,
            fat: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            image_large: PropTypes.string.isRequired,
            image_mobile: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            proteins: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            __v: PropTypes.number.isRequired,
            _id: PropTypes.string.isRequired
        }).isRequired).isRequired
    }).isRequired
};