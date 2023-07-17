import { useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import { Conteiner, Content, Cont } from "./styles";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import { api } from "../../services/api";
import { apiImg } from "../../services/apiImg";

import imgMenu from "../../assets/imgMenu.png";
import { RxCaretLeft } from "react-icons/rx";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Cards } from "../../components/Cards";
import { ButtonEdit } from '../../components/ButtonEdit';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { Button } from "../../components/Button";

export function MenuAdm() {
    const navigate = useNavigate();
    
    const [search, setSearch] = useState("");
    const [contitional, setConditional] = useState(1);

    const [dish, setDish] = useState([]);
    const [allingredients, setAllIngredients] = useState([]);

    const [meals, setMeals] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [dishSelect, setDishSelect] = useState(null);

    const filterRefeiçoes = "Refeições";
    const filterSobremesas = "Sobremesas";
    const filterBebidas = "Bebidas";

    const carousel = useRef(null);
    const carouselTwo = useRef(null);
    const carouselTree = useRef(null);

    const handleDebounce = debounce((value) => {
        setSearch(value);
    }, 500);

    const handleChange = (event) => {
        const value = event.target.value;
        handleDebounce(value);
    };

    useEffect(() => {
        async function fetchNotes() {
            if(search) {
                const response = await api.get(`/search?search=${search}`);
                setDish(response.data);
                setConditional(0)
            }
        }

        fetchNotes();
    }, [search]);

    function handleBack() {
        setSearch("")
        setConditional(1)
    }

    /* Getting data from ingredients */
    useEffect(() => {
        async function fetchIngredients() {
            dish.map(ingred => (
                setAllIngredients(ingred.ingred)
            ))
        }

        fetchIngredients();
    }, [dish]);

    /* Navigating to edit page */
    function handleEditDishes(id) {
        navigate(`/editDishes/${id}`);
    };

    /* Function carrosel */
    const handleLeftClickMeals = e => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    const handleRightClickMeals = e => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
    
    const handleLeftClickDesserts = e => {
        e.preventDefault();
        carouselTwo.current.scrollLeft -= carouselTwo.current.offsetWidth;
    };
    const handleRightClickDesserts = e => {
        e.preventDefault();
        carouselTwo.current.scrollLeft += carouselTwo.current.offsetWidth;
    };
    
    const handleLeftClickDrinks = e => {
        e.preventDefault();
        carouselTree.current.scrollLeft -= carouselTree.current.offsetWidth;
    };
    const handleRightClickDrinks = e => {
        e.preventDefault();
        carouselTree.current.scrollLeft += carouselTree.current.offsetWidth;
    };

    /* Search by category */
    useEffect(() => {
        async function getMeals() {
            const response = await api.get(`/dish/?category=${filterRefeiçoes}`);
            setMeals(response.data);
        }

        getMeals();

        async function getDesserts() {
            const response = await api.get(`/dish/?category=${filterSobremesas}`);
            setDesserts(response.data);
        }
        
        getDesserts();
        
        async function getDrinks() {
            const response = await api.get(`/dish/?category=${filterBebidas}`);
            setDrinks(response.data);
        }
        
        getDrinks();
    }, [])

    /* Navigate to the dish edit page */
    useEffect(() => {
        if (dishSelect) {
            navigate(`/editDishes/${dishSelect}`);
        }
    }, [dishSelect])

    return (
        <Conteiner>
            <Header>
            <Input
                placeholder="Busque por pratos ou ingredientes"
                onChange={handleChange}
            /> 
            </Header>
            {contitional == 0 && (
                <div className="previewDish">
                    <ButtonText
                        className="handleBtn"
                        title={"voltar"}
                        onClick={handleBack}
                        Icon={<RxCaretLeft />}
                    >
                    </ButtonText>

                    {dish &&
                        dish.map(rush => (
                        <Cont id="previewAllDish">
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
                </div>
            )}
            {contitional > 0 && (
                <Content>
                    <img className="imgMenu" src={imgMenu} alt="" />
                    <div className="titulo">
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                
                    <Cont>
                        <Section  title={"Refeições"}>
                            <div className="categorias">
                                <ButtonEdit
                                    className="btnEdit"
                                    icon={MdKeyboardArrowLeft}
                                    id="btnL"
                                    onClick={handleLeftClickMeals}
                                />
                                <div className="menucard" ref={carousel}>
                                    {
                                        meals.map((food, index) => (
                                            <Cards 
                                                className="item"
                                                key={String(index)}
                                                nimg={`${apiImg.defaults.baseURL}/files/${food.img_dish}`}
                                                sub={`imagem do prato ${food.title}`}
                                                title={food.title}
                                                subscript={food.description}
                                                value={food.price}
                                                event={() => setDishSelect(food.id)}
                                                dads={food.id}
                                            />
                                        ))
                                    }
                                    <ButtonEdit
                                        className="btnEditR"
                                        icon={MdKeyboardArrowRight}
                                        id="btnR"
                                        onClick={handleRightClickMeals}
                                    />
                                </div>
                            </div>
                        </Section>
                        
                        <Section title={"Sobremesas"}>
                            <div className="categorias">
                                <ButtonEdit
                                    className="btnEdit"
                                    icon={MdKeyboardArrowLeft}
                                    id="btnL"
                                    onClick={handleLeftClickDesserts}
                                />
                                <div className="menucard" ref={carouselTwo}>
                                    {
                                        desserts.map((food, index) => (
                                            <Cards 
                                                className="item"
                                                key={String(index)}
                                                nimg={`${apiImg.defaults.baseURL}/files/${food.img_dish}`}
                                                sub={`imagem do prato ${food.title}`}
                                                title={food.title}
                                                subscript={food.description}
                                                value={food.price}
                                                event={() => setDishSelect(food.id)}
                                                dads={food.id}
                                            />
                                        ))
                                    }
                                </div>
                                <ButtonEdit
                                    className="btnEditR"
                                    icon={MdKeyboardArrowRight}
                                    id="btnR"
                                    onClick={handleRightClickDesserts}
                                />
                            </div>
                        </Section>
                        
                        <Section title={"Bebidas"}>
                            <div className="categorias">
                                <ButtonEdit
                                    className="btnEdit"
                                    icon={MdKeyboardArrowLeft}
                                    id="btnL"
                                    onClick={handleLeftClickDrinks}
                                />
                                <div className="menucard" ref={carouselTree}>
                                    {
                                        drinks.map((food, index) => (
                                            <Cards 
                                                className="item"
                                                key={String(index)}
                                                nimg={`${apiImg.defaults.baseURL}/files/${food.img_dish}`}
                                                sub={`imagem do prato ${food.title}`}
                                                title={food.title}
                                                subscript={food.description}
                                                value={food.price}
                                                event={() => setDishSelect(food.id)}
                                                dads={food.id}
                                            />
                                        ))
                                    }
                                </div>
                                <ButtonEdit
                                    className="btnEditR"
                                    icon={MdKeyboardArrowRight}
                                    id="btnR"
                                    onClick={handleRightClickDrinks}
                                />
                            </div>
                        </Section>
                    </Cont>
                </Content>
            )}
            <Footer />
        </Conteiner>
    )
}