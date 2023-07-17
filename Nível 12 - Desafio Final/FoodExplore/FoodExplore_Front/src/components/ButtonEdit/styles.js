import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

const Container = styled.button`
    background-color: transparent;
    border: none;

    margin-top: ${px2vw(22)};
    margin-right: ${px2vw(25)};
    >svg{
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1px;
    }

    :hover {
        background-color: transparent;

        >svg{
            color: ${({ theme }) => theme.COLORS.TOMATO_400};
        }
    }
`;

export { Container };