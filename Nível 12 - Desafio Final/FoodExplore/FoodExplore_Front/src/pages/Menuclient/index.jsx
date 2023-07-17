import { useEffect, useState, useRef } from "react";
import { debounce } from "lodash";
import { Conteiner, Content, Cont } from "./styles";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import { useAuth } from "../../hooks/auth";

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
import { DisplayTwo } from '../../components/DisplayTwo';

export function MenuClient() {
    const { signOut } = useAuth();

    const [search, setSearch] = useState("");
    const [contitional, setConditional] = useState(0);
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

    function handleBackClient() {
        setSearch("")
        setConditional(0)
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/search?search=${search}`);
            setDish(response.data);
        }

        fetchDish();
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            if(search) {
                const response = await api.get(`/search?search=${search}`);
                setDish(response.data);
                setConditional(1)
            }
        }

        fetchNotes();
    }, [search]);

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
            const response = await api.get(`/Client/?category=${filterRefeiçoes}`);
            setMeals(response.data);
        }
        getMeals();

        async function getDesserts() {
            const response = await api.get(`/Client/?category=${filterSobremesas}`);
            setDesserts(response.data);
        }
        getDesserts();
        
        async function getDrinks() {
            const response = await api.get(`/Client/?category=${filterBebidas}`);
            setDrinks(response.data);
        }
        
        getDrinks();
    }, [])

    return (
        <Conteiner>
            <Header>
            <Input 
                placeholder="Busque por pratos ou ingredientes"
                onChange={handleChange}
            /> 
            </Header>
            {contitional == 1 && (
                <div className="previewDishClient">
                    <ButtonText
                        className="handleBtn"
                        title={"voltar"}
                        onClick={handleBackClient}
                        Icon={<RxCaretLeft />}
                    >
                    </ButtonText>
                    {
                        dish.map(rush => (
                        <Cont id="previewAllDishClient">
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
                                    food={rush.id}
                                />
                                
                            </div>
                        </Cont>
                        ))
                    }
                </div>
            )}
            {contitional == 0 && (
                <Content>
                    <img className="imgMenu" src={imgMenu} alt="" />
                    <div className="titulo">
                        <h1>Sabores inigualáveis</h1>
                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                    </div>
                
                    <Cont>
                        <Section title={"Refeições"}>
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
                                                food={food.id}
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
                                    onClick={handleRightClickMeals}
                                />
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
                                                food={food.id}
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
                                                food={food.id}
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