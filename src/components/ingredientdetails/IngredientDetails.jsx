import './ingredientdetails.css'
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
}