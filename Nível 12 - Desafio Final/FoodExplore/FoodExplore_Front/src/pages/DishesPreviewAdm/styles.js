import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: ${px2vw(105)} auto ${px2vw(77)};
    
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    div {
        .adm {
            font-size: 12px;
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }
    }

    @media (max-width: 425px) {
        grid-template-rows: ${px2vw(200)} auto ${px2vw(264)};
    };
`;

export const Content = styled.div`
    padding: ${px2vw(32)} ${px2vw(123)} 0;

    a {
        font-weight: 700;
        font-size: ${px2vw(24)};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        display: flex;
        align-items: center;

        svg {
            width: ${px2vw(70)};
            height: ${px2vw(70)};
        }
    };

    @media (max-width: 425px) {
        
        a {
            font-weight: 500;
            font-size: ${px2vw(82)};

            svg {
                width: ${px2vw(150)};
                height: ${px2vw(150)};
            }
        };
    };
`;

export const Cont = styled.div`
    margin-top: ${px2vw(60)};

    display: flex;
    gap: ${px2vw(60)};

    img {
        width: ${px2vw(390)};
        height: ${px2vw(390)};
    }

    .itens {
        width: 100%;
        height: ${px2vw(390)};

        margin-top: ${px2vw(45)};

        h1, p {
            margin-bottom: ${px2vw(24)};
        }

        h1 {
            font-weight: 500;
            font-size: ${px2vw(40)};
        }

        p {
            font-size: ${px2vw(24)};
        }
        
        .products {
            display: flex;
            gap: ${px2vw(17)};

            margin-bottom: ${px2vw(48)};

            button {
                height: ${px2vw(32)};

                background-color: ${({ theme }) => theme.COLORS.Dark_1000};

                font-weight: 500;
                font-size: ${px2vw(16)};
                padding: 4px 8px;

                border-radius: 5px;
            }
        }

        .btn {
            width: ${px2vw(140)};
            height: ${px2vw(48)};
            font-weight: 500;
            font-size: ${px2vw(16)};

            padding: ${px2vw(12)} ${px2vw(20)};
        }
    }

    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        padding: 0 ${px2vw(70)} 0 ${px2vw(70)};

        img {
            width: ${px2vw(905)};
            height: ${px2vw(905)};
        }

        .itens{
            display: flex;
            flex-direction: column;
            align-items: center;
       
            h1 {
                font-size: ${px2vw(95)};
                margin-bottom: 0;
            }

            p {
                font-weight: 400;
                font-size: ${px2vw(55)};
                text-align: center;

                margin: ${px2vw(83)} 0;
            }

            .products {
                width: ${px2vw(1090)};
                margin-bottom: ${px2vw(165)};
                justify-content: center;
                gap: ${px2vw(83)};

                button{
                    width: 100%;
                    height: ${px2vw(110)};
                    
                    font-size: ${px2vw(48)};
                }
            }

            .btn {
                width: 100%;
                height: ${px2vw(165)};
                font-weight: 400;
                font-size: ${px2vw(48)};

                padding: ${px2vw(41)} ${px2vw(390)};
            }
        }
    };
`;