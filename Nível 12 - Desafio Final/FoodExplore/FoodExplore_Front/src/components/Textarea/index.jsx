import { Conteiner } from './styles';

export function Textarea({value, ...rest}) {

    return(
        <Conteiner {...rest}>
            { value }
        </Conteiner>
    )
}