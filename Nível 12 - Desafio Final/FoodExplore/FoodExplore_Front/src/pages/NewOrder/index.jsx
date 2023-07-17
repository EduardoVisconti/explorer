import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Conteiner, Content } from "./styles";
import { BsReceiptCutoff } from "react-icons/bs";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"

export function NewOrder() {
    const { signOut } = useAuth();

    const navigate = useNavigate();

    function handleLogout() {
        navigate(-1);
        signOut();
    }

    function handleBack() {
        navigate(`/`);
    }

    return (
        <Conteiner>
                <Header
                    eventss={handleLogout}
                    btnLogo={< BsReceiptCutoff />}
                    btnTitle={"Pedidos (0)"}
                >
                    <Input 
                        placeholder="Busque por pratos ou ingredientes"
                        /* onChange={(e) => setSearch(e.target.value)} */
                    />
                </Header>
            <Content>
                <ButtonText 
                    title={"Página em manutenção clique no texto para voltar"}
                    onClick={() => handleBack()}
                />

            </Content>
            <Footer />
        </Conteiner>
    )
}