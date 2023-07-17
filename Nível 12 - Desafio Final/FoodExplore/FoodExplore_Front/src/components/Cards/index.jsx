import { Conteiner } from "./styles";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { TfiPencil } from "react-icons/tfi"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { ButtonEdit } from '../ButtonEdit';
import { Display } from '../Display';

export function Cards({ nimg, title, subscript, value, subs, event, food, dads }) {
    const { user } = useAuth();

    const navigate = useNavigate();
    
    const [image, setImage] = useState('img1');
    const [quantity, setQuantity] = useState(1);
    const [unidads, setUnidads] = useState(`01`);

    let images = {
        img1: AiOutlineHeart,
        img2: AiFillHeart
    };

    function changeImage() {
        setImage(state => (state === 'img1' ? 'img2' : 'img1'));
    };

    function handleRemoveItem() {
        setQuantity(quantity - 1);

        if (quantity == 1) {
            setQuantity(1);
        }
    };

    function handleAddItem() {
        setQuantity(quantity + 1);
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

    function details(dads) {
        if(user.is_admin == 1) {
            navigate(`/dishesPreviewAdm/${dads}`);
        } else {
            navigate(`/dishesPreviewClient/${dads}`);
        }
    };

    return (
        <Conteiner>
            <div id="dish">
                {user.is_admin == 1 ? (
                    <ButtonEdit
                        className="btnEditPencil"
                        icon={TfiPencil}
                        onClick={event}
                    />
                ) :  (
                    <ButtonEdit
                        className="btnEditPencil"
                        icon={images[image]}
                        onClick={changeImage}
                    />
                )}
            </div>
    
            <img 
                className="imgEdit"
                src={nimg} 
                alt={subs} 
                onClick={() => details(dads)}
            />

            <strong>
                {title}
            </strong>
            <p className="description hide">{subscript}</p>
            <h1>
                R$ {value?.replace('.', ',')}
            </h1>
            <div >
                {user.is_admin == 1 ? (
                    <div />
                ) :  (
                    <div >
                        < Display 
                            food={food}
                        />
                    </div>
                )}
            </div>
        </Conteiner>
    )
}