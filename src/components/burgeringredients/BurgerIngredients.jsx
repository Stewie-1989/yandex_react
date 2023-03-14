import { Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import './modules.css'
import Ingrid from "../ingrid/Ingrid";
import PropTypes from "prop-types";

export default function BurgerIngredients({dataBurger, dataBurgers, state}) {

    const [current, setCurrent] = React.useState('Булки')

    const bun = React.useMemo(() => {
        return state.data.filter(
            (ingrid) => ingrid.type === "bun"
        ).map((ingrid) => <Ingrid key={ingrid._id} data={ingrid} dataBurger={dataBurger}  dataBurgers={dataBurgers}/>)
    }, [state.data, dataBurgers])

    const sauce = React.useMemo(() => {
        return state.data.filter(
            (ingrid) => ingrid.type === "sauce"
        ).map((ingrid) => <Ingrid key={ingrid._id} data={ingrid} dataBurger={dataBurger}  dataBurgers={dataBurgers}/>)
    }, [state.data, dataBurgers])

    const main = React.useMemo(() => {
        return state.data.filter(
            (ingrid) => ingrid.type === "main"
        ).map((ingrid) => <Ingrid key={ingrid._id} data={ingrid} dataBurger={dataBurger}  dataBurgers={dataBurgers}/>)
    }, [state.data, dataBurgers])

    function setValueAndFocus(value) {
        setCurrent(value)
        document.getElementById(value).scrollIntoView(true);
    }

    return (
        <section>
            <section className="mb-5 mt-10" style={{ width: '600px'}}>
                <label >
                    <p className="text text_type_main-large">
                        Соберите Бургер
                    </p>
                </label>
            </section>
            <section className="text text_type_main-large " style={{ display: 'flex', width: '600px'}}>
                <Tab value="Булки" active={current === 'Булки'} onClick={() => setValueAndFocus("Булки")}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={() => setValueAndFocus("Соусы")}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={() => setValueAndFocus("Начинки")}>
                    Начинки
                </Tab>
            </section>
            <section className="custom-scroll body mt-10"  style={{ width: '600px', height: "600px"}}>
                <label id="Булки" className="text text_type_main-large constructor-element__row">
                    Булки
                </label>
                <section className="constructor-element__row">
                    {state.data.length && bun}
                </section>
                <label id="Соусы" className="text text_type_main-large mt-10 constructor-element__row">
                    Соусы
                </label>
                <section className="constructor-element__row">
                    {state.data.length && sauce}
                </section>
                <label id="Начинки" className="text text_type_main-large mt-10 constructor-element__row my-class">
                    Начинки
                </label>
                <section className="constructor-element__row">
                    {state.data.length && main}
                </section>
            </section>
        </section>
    )
}

BurgerIngredients.propTypes = {
    state: PropTypes.shape({
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
    }).isRequired,
    dataBurgers: PropTypes.arrayOf(PropTypes.shape({
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
    }).isRequired).isRequired,
    dataBurger: PropTypes.func.isRequired
};