import { Conteiner } from './styles';

export function Button({ title, loading = false, logoCL, ...rest }) {

    return (
        <Conteiner 
            type='button'
            disabled={loading}
            {...rest}
        >
            {logoCL}
            {loading ? 'Carregando...' : title}
        </Conteiner>
    );
}