
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Conteiner, Form } from "./styles";

import { api } from "../../services/api";

import BackgroundImg from '../../assets/LogFoodExplorer.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'; 
import { Section } from '../../components/Section'; 

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }
            });
    }

    return (
        <Conteiner>
            <img src={BackgroundImg} alt="Logo" />

            <Form>
                <h1 className="hh1 hide">Crie sua conta</h1>
                
                <Section title={"Seu nome"}>
                    <Input 
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                </Section>

                <Section title={"Email"}>
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Section>
                
                <Section title={"Senha"}>
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </Section>

                <Button title="Criar conta" onClick={handleSignUp}/>

                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Conteiner>
    );
}