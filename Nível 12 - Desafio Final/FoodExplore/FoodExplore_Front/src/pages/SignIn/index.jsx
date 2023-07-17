import { useState } from 'react';
import { Link } from "react-router-dom";
import { Conteiner, Form } from "./styles";

import { useAuth } from "../../hooks/auth";

import BackgroundImg from '../../assets/LogFoodExplorer.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Conteiner>
            <img src={BackgroundImg} alt="Logo" />

            <Form>
                <h1 className="hh1 hide">Faça login</h1>

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

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Conteiner>
    );
}