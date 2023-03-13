import AppHeader from "../appheader/AppHeader";
import BurgerIngredients from "../burgeringredients/BurgerIngredients";
import BurgerConstructor from "../burgerconstructor/BurgerConstructor";
import React from "react";
import './application.css'
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
        isLoading: PropTypes.bool,
        hasError: PropTypes.bool,
        data: PropTypes.arrayOf(PropTypes.shape({
            calories: PropTypes.number,
            carbohydrates: PropTypes.number,
            fat: PropTypes.number,
            image: PropTypes.string,
            image_large: PropTypes.string,
            image_mobile: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            proteins: PropTypes.number,
            type: PropTypes.string,
            __v: PropTypes.number,
            _id: PropTypes.string
        }))
    })
};