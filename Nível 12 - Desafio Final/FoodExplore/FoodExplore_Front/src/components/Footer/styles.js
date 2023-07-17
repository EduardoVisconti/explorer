import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: ${px2vw(77)};

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.Dark_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_200};

    padding: ${px2vw(24)} ${px2vw(123)};

    span {
        font-family: 'Roboto', sans-serif;
        font-size: ${px2vw(14)};
    };

    @media (max-width: 425px) {
        height: ${px2vw(264)};
        padding: ${px2vw(24)} ${px2vw(50)};

        img{
            width: ${px2vw(490)};
        }

        span {
            font-size: ${px2vw(40)};
        };
    };
`;