import { Conteiner } from './styles';

export function ButtonText({ title, isActive, Icon, ...rest }) {

    return (
        <Conteiner 
            type='button'
            isActive={isActive}
            { ...rest}
        >
            {Icon}
            {title}
        </Conteiner>
    )
}