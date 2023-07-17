import { useEffect, useState } from "react";
import { Conteiner, Content, Dish } from "./styles";

import { useAuth } from "../../hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { FiUpload } from 'react-icons/fi';

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { NotItens } from "../../components/NotItens"

export function EditDishes() {
    const { signOut } = useAuth();

    const [search, setSearch] = useState("");
    const [data, setData] = useState();

    const [file, setFile] = useState(null);

    const [title, setTitle] = useState();
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const [newIngredient, setNewIngredient] = useState("");
    const [allIngredientsExistent, setAllIngredientsExistent] = useState([]);
    const [allIngredients, setAllIngredients] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    /* receives the image and performs the necessary treatment */
    function handleChangeImg(event) {
        const fileImg = event.target.files[0];
        const fileUploadForm = new FormData();
        fileUploadForm.append("img_dish", fileImg)
        setFile(fileUploadForm);
    };

    /* return to previous page */
    function handlePreviewDishes() {
        navigate(`/dishesPreviewAdm/${params.id}`);
    };

    /* send data to update new dish */
    function handleAddProduct() {
        setAllIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngred(deleted) {
        setAllIngredients(prevState => prevState.filter(ingre => ingre !== deleted));
    }

    async function handlePutDish() {
        if(!allIngredients){
            console.log("ola")
        }

        const responseData = await api.put(`/dish/${params.id}`, {
            title,
            category,
            price,
            description,
            allIngredients,
        });

        if (!file) {
        alert('Prato atualizado com sucesso');
        } else {
        await api.patch(`/dish/${params.id}`, file);
        alert('Prato atualizada com sucesso');
        }
    };

    /* delete existing dish */
    async function deleteDish() {
        await api.delete(`/dish/${params.id}`);
        alert("Prato excluído com sucesso!");
        navigate(-1);
    };

    /* returns the login page */
    function handleLogout() {
        navigate(-1);
        signOut();
    }

    /* receive data from existing dish */
    useEffect(() => {
        async function fetchData() {
          const response = await api.get(`/dish/${params.id}`);
          setData(response.data);

        }
        fetchData();
      }, []);
    
      /* stores data from existing dishes in the states */
      useEffect(() => {
        async function dataDish() {
            data?.map((dis) => (
                setTitle(dis.title),
                setCategory(dis.category),
                setPrice(dis.price),
                setDescription(dis.description),
                setAllIngredientsExistent(dis.ingredients)
            ))
        }

        dataDish();

        async function ingredientsExistents() {
            const ingred = allIngredientsExistent.map(ingre => ingre.name);
            setAllIngredients(ingred)
        }

        ingredientsExistents();
      }, [data]);

    return (
        <Conteiner>
            <Header
                eventss={handleLogout}
                btnTitle={"Novo prato"}
            >
                <Input 
                    placeholder="Busque por pratos ou ingredientes"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Header>
            <Content>
                <ButtonText 
                    title={"voltar"}
                    onClick={() => handlePreviewDishes()}
                />

                <h1>Editar prato</h1>
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
                    
                    <Section title={"Nome"} className="name">
                        <Input 
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Section>
                    
                    <Section title={"Categoria"} className="categor">
                        <div>
                            <select name="category" defaultValue={''} onChange={texto => setCategory(texto.target.value)}>
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
                                allIngredients.map((ingre, index) => (
                                    <NotItens 
                                        key={String(index)}
                                        value={ingre}
                                        onClick={() => handleRemoveIngred(ingre)}
                                    />
                                ))
                            }

                            <NotItens 
                                isNew 
                                placeholder="ingrediente"
                                value={newIngredient}
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={handleAddProduct}
                            />
                        </div> 
                    </Section>

                    <Section title={"Preço"}>
                        <Input 
                            className={"preco"} 
                            placeholder={"00,00"}
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

                <div className="btns">
                    <Button title={"Excluir prato"}
                        onClick={deleteDish}
                    />
                    <Button 
                        title={"Salvar alterações"} 
                        onClick={handlePutDish}
                    />
                </div>

            </Content>
            <Footer />
        </Conteiner>
    )
}