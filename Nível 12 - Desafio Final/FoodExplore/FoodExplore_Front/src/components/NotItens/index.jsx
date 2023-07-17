import { AiOutlineClose, AiOutlineCompress } from 'react-icons/ai';

import { Conteiner } from './styles';

export function NotItens({ isNew, value, onClick, ...rest}) {
    return (
        <Conteiner isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button 
                type='button'
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                { isNew ? <AiOutlineCompress /> : <AiOutlineClose />}
            </button>

        </Conteiner>
    );
}