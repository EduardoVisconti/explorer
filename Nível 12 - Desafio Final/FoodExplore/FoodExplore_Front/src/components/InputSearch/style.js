import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: ${px2vw(67)};
    display: flex;
    align-items: center;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.Dark_800};
    
    border-radius: 5px;

    margin: ${px2vw(50)} 0;
    padding: ${px2vw(20)} ${px2vw(17)};
    
    > input {
        width: 100%;
        font-size: ${px2vw(25)};
        
        padding: ${px2vw(17)};
        
        background: transparent;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        border: none;
        
        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

    }

    > svg {
        font-size: ${px2vw(33)};
    }
`;

