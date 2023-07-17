import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: ${px2vw(150)};
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: 8px;

    button {
        border: none;
        background: none;

        margin-top: 5px;
        margin-right: ${px2vw(17)};
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    input {
        width: 100%;
        height: ${px2vw(36)};

        margin-top: 0px;
        padding: ${px2vw(14)} ${px2vw(22)};

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`;