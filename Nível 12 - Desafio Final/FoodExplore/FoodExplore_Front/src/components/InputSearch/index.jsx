import { Conteiner } from './style';
import { AiOutlineSearch } from "react-icons/ai";

export function InputSearch({ ...rest }) {
    
    return(
        <Conteiner>
            <AiOutlineSearch />
            <input {...rest} />
        </Conteiner>
    )
}