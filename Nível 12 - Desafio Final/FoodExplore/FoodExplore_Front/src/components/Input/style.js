import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: ${px2vw(400)};
    align-items: center;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    
    border-radius: 5px;
    
    > input {
        width: 100%;
        height: ${px2vw(48)};
        
        padding: ${px2vw(17)};
        
        background: transparent;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        border: none;
        
        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

    }


    > svg {
        margin-left: ${px2vw(140)};
    }
`;

