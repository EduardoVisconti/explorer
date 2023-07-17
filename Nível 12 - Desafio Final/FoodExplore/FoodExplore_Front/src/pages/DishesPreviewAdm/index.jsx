import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Conteiner, Content, Cont } from "./styles";

import { api } from "../../services/api";
import { apiImg } from "../../services/apiImg";

import { RxCaretLeft } from "react-icons/rx"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function DishesPreviewAdm() {

    const [search, setSearch] = useState("");
    const [dish, setDish] = useState([]);
    const [allingredients, setAllIngredients] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchNotes() {
            if(search) {
                const response = await api.get(`/search?search=${search}`);
                setDish(response.data);
            }
        }

        fetchNotes();
    }, [search]);
    console.log(dish)

    /* Navigating to edit page */
    function handleEditDishes(id) {
        navigate(`/editDishes/${id}`);
    };

    /* Getting data from dish */
    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dish/${params.id}`);
            setDish(response.data);
        }

        fetchDish();
    }, [])

    /* Getting data from ingredients */
    useEffect(() => {
        async function fetchIngredients() {
            dish.map(ingred => (
                setAllIngredients(ingred.ingredients)
            ))
        }

        fetchIngredients();
    }, [dish]);

    return (
        <Conteiner>
                <Header>
                    <Input 
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Header>
            <Content>
                <Link to="/">
                    <RxCaretLeft />
                    voltar
                </Link>
            
                {dish &&
                    dish.map(rush => (
                    <Cont>
                        <img 
                            src={`${apiImg.defaults.baseURL}/files/${rush.img_dish}`} 
                            alt="imagem do prato" 
                        />
                        <div className="itens">
                            <h1>{rush.title}</h1>
                            <p>{rush.description}</p>
                            <div className="products">
                                {allingredients &&
                                    allingredients.map((ingredients, index) => (
                                        <ButtonText 
                                            key={String(index)}
                                            title={ingredients.name}
                                        />
                                    ))
                                }
                            </div>
                            <Button 
                                className="btn" 
                                onClick={() => handleEditDishes(rush.id)}
                                title={"Editar prato"} 
                            />
                        </div>
                    </Cont>
                    ))
                }
            </Content>
            <Footer />
        </Conteiner>
    )
}