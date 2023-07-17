import { Conteiner } from "./styles";

import ImgLogoTwo from "../../assets/ImgLogoTwo.png"

export function Footer() {
    return (
        <Conteiner>
            <img src={ImgLogoTwo} alt="Logo" />

            <span>© 2023 - Todos os direitos reservados.</span>
        </Conteiner>
    )
}