import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.span`
    font-size: ${px2vw(16)};
    padding:${px2vw(8)} ${px2vw(16)};

    border-radius: 8px;
    margin-right: ${px2vw(16)};

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background: ${({theme}) => theme.COLORS.LIGHT_600};
    
`;