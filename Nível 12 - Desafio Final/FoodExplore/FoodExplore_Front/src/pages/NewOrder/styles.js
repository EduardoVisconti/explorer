import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: ${px2vw(105)} auto ${px2vw(77)};
    
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;

export const Content = styled.div`
    padding: ${px2vw(32)} ${px2vw(123)} 0;

    display: flex;
    align-items: center;
    justify-content: center;

    button {
        font-size: 84px;
    }
`;