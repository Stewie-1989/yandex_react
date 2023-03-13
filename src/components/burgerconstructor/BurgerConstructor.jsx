import {CurrencyIcon, DragIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import React from "react";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/constructor-element";
import './burgerconstructor.css'
import Modal from "../modal/Modal";
import OrderDetails from "../orderdetails/OrderDetails";
import PropTypes from "prop-types";

export default function BurgerConstructor({dataBurgers, deleteIngredients}) {

    const [priceAll, setPriceAll] = React.useState(0)
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        setPriceAll(0)
        dataBurgers.forEach(s => {
            if(s.type === 'bun') {
                setPriceAll(price => price + 2 * s.price)
            } else {
                setPriceAll(price => price + s.price)
            }
        })
    })

    return (
        <section className="mt-25" style={{width: '600px'}}>
            <ul>
                <section className={dataBurgers.length !== 0 ? "display-contents ml-4" : "display-none"}>
                    {
                        dataBurgers
                            .map((ingrid, index) =>  ingrid.type === "bun" && <li className="mb-4 ml-8" style={{width: '560px',  display: 'flex'}}>
                                <ConstructorElement
                                    key={index}
                                    price={ingrid.price}
                                    text={ingrid.name}
                                    thumbnail={ingrid.image}
                                    type="top"
                                    extraClass="constructor-element__row_cast span"
                                    handleClose={() => {deleteIngredients(index, ingrid.id)}}
                                    isLocked={dataBurgers.length !== 1}/>
                            </li>
                            )
                    }
                </section>
            </ul>
            <ul className={dataBurgers.length > 5 ? "custom-scroll ml-4 my-scroll" : "ml-4" } style={{width: '575px'}}>
                <section className={dataBurgers.length !== 0 ? "display-contents" : "display-none"}>
                    {
                        dataBurgers
                            .map((ingrid, index) =>  ingrid.type !== "bun" && <li className=" mb-4" style={{width: '560px', display: 'flex'}}>
                                <span style={{margin: 'auto'}}>
                                    <DragIcon type="primary"/>
                                </span>
                                <ConstructorElement
                                    key={index}
                                    price={ingrid.price}
                                    text={ingrid.name}
                                    thumbnail={ingrid.image}
                                    extraClass="constructor-element__row_cast span"
                                    handleClose={() => {deleteIngredients(index, ingrid.id)}}
                                    isLocked={false}/>
                            </li>
                        )
                    }
                </section>
            </ul>
            <ul>
                <section className={dataBurgers.length !== 0 ? "display-contents ml-4" : "display-none"}>
                    {
                        dataBurgers
                            .map((ingrid, index) => ingrid.type === "bun" && <li className="mt-4 ml-8" style={{width: '560px',  display: 'flex'}}>
                                <ConstructorElement
                                    key={index}
                                    price={ingrid.price}
                                    text={ingrid.name}
                                    thumbnail={ingrid.image}
                                    type="bottom"
                                    extraClass="constructor-element__row_cast span"
                                    handleClose={() => {deleteIngredients(index, ingrid.id)}}
                                    isLocked={dataBurgers.length !== 1}/>
                            </li>
                            )
                    }
                </section>
            </ul>
            <ul className="constructor-element__row ml-8 ml-5 mr-4 mt-10" style={{width: '560px', justifyContent: 'flex-end'}}>
                <li className="constructor-element__price">
                    <span>{priceAll}</span>
                    <CurrencyIcon type="primary"/>
                </li>
                <li>
                    <Button onClick={() => {setVisible(true)}} htmlType="button" type="primary" size="large" extraClass="ml-10">
                        Оформить заказ
                    </Button>
                </li>
            </ul>
            <ul>
                {visible && <Modal title="" closeModal={() =>{setVisible(false)}}>
                    <OrderDetails/>
                </Modal>
                }
            </ul>
        </section>
    )

}

BurgerConstructor.propTypes = {
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