import { Conteiner } from "./styles";

export function Section({ title, children }) {

    return (
        <Conteiner>
            <h2>{title}</h2>
            {children}
        </Conteiner>
    )
}