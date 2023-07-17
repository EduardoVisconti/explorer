import { Conteiner } from "./styles";
import { useState, useEffect } from 'react';

import { ButtonText } from '../ButtonText';
import { BtnIcludeDish } from '../BtnIcludeDish';

export function Display({ food }) {

    const [quantity, setQuantity] = useState(1);
    const [unidads, setUnidads] = useState(`01`);

    function handleRemoveItem() {
        setQuantity(quantity - 1);

        if (quantity == 1) {
            setQuantity(1);
        }
    };

    function handleAddItem() {
        setQuantity(quantity + 1);
    };  

    let total;
    async function handleCreateOrder(name, price, quantities, total, image) {
        if (quantity > 10) {
            return alert('limite máximo de unidade é de 10');
        }

        /* let p = Number(price.replace(',', '.')).toFixed(2);

        total = (p * quantity).toFixed(2); */

        /* await api.post(`/order/${user.id}`, {
            name,
            price,
            quantity,
            total,
            image
        }); */

       /*  alert('pedido realizado'); */
        alert(`voce fez ${quantity} pedidos de ${food} anotado`)
        setQuantity(1)
        setUnidads(`01`)
    };

    useEffect(() => {
        if(quantity <= 9) {
            setUnidads(`0${quantity}`)
        } else {
            setUnidads(`${quantity}`)
        }

        if(quantity == 11) {
            alert("Desculpa, mas o limite máximo é de 10 unidades por prato.")
            setQuantity(10)
            setUnidads(`0${quantity}`)
        }

    }, [quantity])

    return (
        <Conteiner>
            <div className="displays">
                <ButtonText
                    title="-"
                    className="decrement"
                    onClick={handleRemoveItem}
                    />
                    <span>{unidads}</span>
                    <ButtonText
                    title="+"
                    className="decrement"
                    onClick={handleAddItem}
                />
            </div>
            < BtnIcludeDish 
                text="incluir"
                className="insert"
                onClick={() => handleCreateOrder(food)}
            /> 
        </Conteiner>
    );
};