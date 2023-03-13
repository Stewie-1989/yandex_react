import React from "react";
import IngredientDetails from "../ingredientdetails/IngredientDetails";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import './ingrid.css'
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
    })),
    data: PropTypes.shape({
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
    })
};