import React from "react";
import IngredientDetails from "../ingredientdetails/IngredientDetails";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import './modules.css'
import Modal from "../modal/Modal";
import PropTypes from "prop-types";

export default function Ingrid ({ data, dataBurger, dataBurgers}){
    const image = (
        <img src={ data.image} alt={data.name}/>
    );
    const [visible, setVisible] = React.useState(false)

    function addIngrid(){
        dataBurger(data)
    }

    return (
        <section className="mt-6 mr-4 ingrid-hidden" >
            <section>
                {visible && <Modal title="Детали ингридиента" closeModal={() =>{setVisible(false)}}>
                    <IngredientDetails data={data} />
                </Modal>}
            </section>
            {
                dataBurgers.length !== 0 && <section className={dataBurgers.filter((s) => s._id === data._id).length === 0 ?
                    "counter-null" : "counter-not-null"}>
                    <Counter count={dataBurgers.filter((s) => s._id === data._id).length }/>
                </section>
            }
            <section onClick={() =>{setVisible(true)}} className="center-burger mr-4 mb-1">
                {image}
            </section>
            <section className="center-burger constructor-element__price mb-1">
                <span>{data.price}</span>
                <CurrencyIcon type="primary" ></CurrencyIcon>
            </section>
            <section onDoubleClick={addIngrid} className={data.type === 'bun' && dataBurgers.length === 0 ?
                "center-burger" : (data.type === 'main' || data.type === 'sauce') && dataBurgers.length > 0 ?
                    "center-burger" : "center-burger disabled"} style={{height: '75px'}}>
                <p className="text">{data.name}</p>
            </section>
        </section>
    );
};

Ingrid.propType = {
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
    data: PropTypes.shape({
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
    }).isRequired,
    dataBurger: PropTypes.func.isRequired
};