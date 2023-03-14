import './modules.css'
import React from "react";
import ok from './ok.png'
export default function OrderDetails() {
    return (
        <section className="main-order">
            <section className="mt-30">
                <p className="text text_type_digits-large">5633</p>
            </section>
            <section className="mt-8">
                <p className="text text_type_main-medium">Индикатор заказа</p>
            </section>
            <section className="mt-15">
                <img src={ok} alt="ok"/>
            </section>
            <section className="mt-15">
                <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            </section>
            <section className="mt-2 mb-30">
                <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </section>
        </section>
    )
}