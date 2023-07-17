import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Conteiner, Content, Cont } from "./styles";

import { api } from "../../services/api";
import { apiImg } from "../../services/apiImg";

import { RxCaretLeft } from "react-icons/rx"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { DisplayTwo } from '../../components/DisplayTwo';

export function DishesPreviewClient() {
    const [dish, setDish] = useState([]);

    const [search, setSearch] = useState("");
    const [idDish, setIdDish] = useState();
    const [allingredients, setAllIngredients] = useState([]);

    const params = useParams();

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
                        /* onChange={(e) => setSearch(e.target.value)} */
                    />
                </Header>
            <Content>
                <Link to="/">
                    <RxCaretLeft />
                    voltar
                </Link>
            
                {
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
                                {
                                    allingredients.map((ingredients, index) => (
                                        <ButtonText 
                                            key={String(index)}
                                            title={ingredients.name}
                                        />
                                    ))
                                }
                            </div>

                            <DisplayTwo 
                                className="displayPreview"
                                qtdFood={rush.id}
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