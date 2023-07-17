import { Conteiner } from './style';

export function Input({ icon: Icon, ...rest }) {
    
    return(
        <Conteiner>
            {Icon && <Icon size={20}/>}
            <input {...rest} />
        </Conteiner>
    )
}