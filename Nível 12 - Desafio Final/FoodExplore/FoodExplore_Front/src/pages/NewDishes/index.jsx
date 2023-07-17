import { useState } from "react";
import { Conteiner, Content, Dish } from "./styles";

import { FiUpload } from 'react-icons/fi';

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { NotItens } from "../../components/NotItens"

export function NewDishes() {
    const { user, signOut } = useAuth();

    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const [img_dish, setImgDish] = useState(null);
    const [file, setFile] = useState(null);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState([]);

    function handleMenu() {
        navigate(-1);
    };

    function handleChangeImg(event) {
        const fileImg = event.target.files[0];
        const fileUploadForm = new FormData();
        fileUploadForm.append("img_dish", fileImg)
        setFile(fileUploadForm);

        const imagePreview = URL.createObjectURL(fileImg);
        setImgDish(imagePreview);
    };

    async function handleNewDish() {
        if(!file) {
            return alert("Você não acrescentou imagem, selecione uma para continuar.");
        }
        if(!title) {
            return alert("Você não acrescentou titulo, digite um para continuar.");
        }
        if(category === "Click e escolha uma opção" || category === "" || category === "Opcoes") {
            return alert("Você não escolheu uma categoria. Clique e escolha uma.");
        }
        if(ingredients == "") {
            return alert("Você não digitou um ingrediente, digite no minimo um.");
        }
        if(!price) {
            return alert("Você não digitou um preço, digite um valor.");
        }
        if(!description) {
            return alert("Descreva o prato. Falando brevemente sobre ele.");
        }

        const response = await api.post("/dish", {
            title,
            category,
            ingredients,
            price,
            description,
        });
        
        await api.patch(`/dish/${response.data.id}`, file );
        alert("Prato criado com sucesso!");
        navigate(-1);
    };
    

    function handleAddProduct() {
        setIngredients(prevState => [...prevState, newIngredients]);
        setNewIngredients("");
    }

    function handleRemoveProduct(deleted) {
        setIngredients(prevState => prevState.filter(ingredients => ingredients !== deleted));
    }

    function handleLogout() {
        navigate(-1);
        signOut();
    }

    return (
        <Conteiner>
                <Header
                    eventss={handleLogout}
                    titleAdm={"admin"}
                    btnTitle={"Novo prato"}
                >
                    <Input 
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Header>
            <Content>
                <ButtonText title={"voltar"} onClick={handleMenu}/>

                <h1>Adicionar prato</h1>
                <div className="lineOne">
                    <Section title={"Imagem do prato"}>
                        <Dish>
                            <label htmlFor="dish">
                                <FiUpload className="fiUpload"/>
                                <span>Selecione imagem</span>
                            
                                <input 
                                    id='dish'
                                    type="file"
                                    onChange={handleChangeImg}
                                />
                            </label>
                        </Dish>
                    </Section>
                    
                    <Section title={"Nome"}>
                        <Input 
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Section>
                    
                    <Section title={"Categoria"}>
                        <div>
                            <select name="category" value={category} onChange={texto => setCategory(texto.target.value)}>
                                <option value="Opcoes">Click e escolha uma opção</option>
                                <option value="Refeições">Refeições</option>
                                <option value="Sobremesas">Sobremesas</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>
                        </div>
                    </Section>
                </div>

                <div className={"lineTwo"}>
                    <Section title={"Ingredientes"}>
                        <div className="tags">
                            {
                                ingredients.map((ingredients, index) => (
                                    <NotItens 
                                        key={String(index)}
                                        value={ingredients}
                                        onClick={() => handleRemoveProduct(ingredients)}
                                    />
                                ))
                            }
                            <NotItens 
                                isNew 
                                placeholder="ingrediente"
                                value={newIngredients}
                                onChange={e => setNewIngredients(e.target.value)}
                                onClick={handleAddProduct}
                            />
                        </div>
                    </Section>

                    <Section title={"Preço"}>
                        <Input 
                            className={"preco"} 
                            placeholder={"R$ 00,00"}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </Section>
                </div>
                    
                <Section title={"Descrição"}>
                    <Textarea 
                        placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Section>

                <Button 
                    className="btntext" 
                    title={"Salvar alterações"}
                    onClick={handleNewDish}
                />

            </Content>
            <Footer />
        </Conteiner>
    )
}