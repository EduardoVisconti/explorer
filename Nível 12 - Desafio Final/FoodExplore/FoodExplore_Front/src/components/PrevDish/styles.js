import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`

    h1 {
        font-weight: 500;
        font-size: ${px2vw(40)};
    }

    .products {
        display: flex;
        gap: 12px;

        margin-bottom: ${px2vw(48)};

        button {
            height: ${px2vw(32)};

            background-color: ${({ theme }) => theme.COLORS.Dark_1000};

            font-weight: 500;
            font-size: ${px2vw(20)};
            padding: 4px 8px;

            border-radius: 5px;
        }
    }
`;