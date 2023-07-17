import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.section`
    > h2 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: ${px2vw(16)};
        font-weight: 400;
    }
`;