
import { Conteiner } from "./styles";

export function PrevDish({ title, description }) {
    return (
        <Conteiner>
            <h1>
                {title}
            </h1>

            <p>
                {description}
            </p>
        </Conteiner>

    )
}