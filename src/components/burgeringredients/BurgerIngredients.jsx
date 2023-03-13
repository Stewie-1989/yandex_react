import { Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import './burgeringredients.css'
import Ingrid from "../ingrid/Ingrid";
import PropTypes from "prop-types";

export default function BurgerIngredients({dataBurger, dataBurgers, state}) {

    const [current, setCurrent] = React.useState('Булки')

    function setValueAndFocus(value) {
        setCurrent(value)
        document.getElementById(value).scrollIntoView(true);
    }

    let clickOnIngrid = (value) =>{
        dataBurger(value)
    };
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
                    {state.data.length &&
                        state.data.filter(
                            (ingrid) => ingrid.type === "bun"
                        ).map((ingrid) => <Ingrid key={ingrid._id} data={ingrid} dataBurger={clickOnIngrid}  dataBurgers={dataBurgers}/>)
                    }
                </section>
                <label id="Соусы" className="text text_type_main-large mt-10 constructor-element__row">
                    Соусы
                </label>
                <section className="constructor-element__row">
                    {state.data.length &&
                        state.data.filter(
                        (ingrid) => ingrid.type === "sauce"
                        ).map((ingrid) => <Ingrid key={ingrid._id} data={ingrid} dataBurger={clickOnIngrid}  dataBurgers={dataBurgers}/>)
                    }
                </section>
                <label id="Начинки" className="text text_type_main-large mt-10 constructor-element__row my-class">
                    Начинки
                </label>
                <section className="constructor-element__row">
                    {state.data.length &&
                        state.data.filter(
                            (ingrid) => ingrid.type === "main"
                        ).map((ingrid) => <Ingrid key={ingrid._id} data={ingrid} dataBurger={clickOnIngrid}  dataBurgers={dataBurgers}/>)
                    }
                </section>
            </section>
        </section>
    )
}

BurgerIngredients.propTypes = {
    state: PropTypes.shape({
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
    }),
    dataBurgers: PropTypes.arrayOf(PropTypes.shape({
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
};