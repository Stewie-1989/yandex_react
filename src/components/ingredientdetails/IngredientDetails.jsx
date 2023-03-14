import './modules.css'
import React from "react";
import PropTypes from "prop-types";

export default function IngredientDetails({data}) {

    return (
        <section className="main-ingrid-details">
            <section className="center-burger-modal">
                <img src={data.image_large} alt={data.name}/>
            </section>
            <section className="center-burger-modal mt-4 mb-8" style={{ width: '500px', height: '50px'}}>
                <p className="text text_type_main-medium">
                    {data.name}
                </p>
            </section>
            <section className="data-modal-flex" >
                <section className="data-modal mr-5 mb-15">
                    <p className="text text_type_main-default text_color_inactive">Калории, ккалл</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.calories}</p>
                </section>
                <section className="data-modal mr-5 mb-15">
                    <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.proteins}</p>
                </section>
                <section className="data-modal mr-5 mb-15">
                    <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.fat}</p>
                </section>
                <section className="data-modal mb-15">
                    <p className="text text_type_main-default text_color_inactive">Угливоды, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{data.carbohydrates}</p>
                </section>
            </section>
        </section>
    )
}

IngredientDetails.propTypes ={
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
    }).isRequired
}