import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.button`
    display: flex;
    align-items: center;

    background: none;
    color: ${({theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.LIGHT_100};

    border: none;
    font-size: ${px2vw(14)};
`;