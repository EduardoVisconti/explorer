import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.button`
    width: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: ${px2vw(48)};
    border: 0;
    padding: ${px2vw(12)} ${px2vw(32)};
    border-radius: ${px2vw(5)};
    font-weight: 500;

    margin-top: ${px2vw(10)};

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
`;