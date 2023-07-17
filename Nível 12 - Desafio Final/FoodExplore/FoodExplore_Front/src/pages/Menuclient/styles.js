import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: ${px2vw(105)} auto ${px2vw(77)};
    grid-template-areas: 
    "header"
    "content"
    "footer";
    
    background-color: ${({ theme }) => theme.COLORS.Dark_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .previewDishClient {
        margin: 32px 122px;

        .handleBtn {
            font-weight: 700;
            font-size: 24px;

            svg{
                width: 50px;
                height: 50px;
            }
        }

        #previewAllDishClient {
            margin-top: ${px2vw(60)};
            display: flex;
            gap: ${px2vw(66)};

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
                    gap: ${px2vw(16)};
                    

                    margin-bottom: ${px2vw(48)};

                    button {
                        height: ${px2vw(40)};

                        background-color: ${({ theme }) => theme.COLORS.Dark_1000};

                        font-weight: 500;
                        font-size: ${px2vw(20)};
                        padding: 4px 8px;

                        border-radius: 5px;
                    }
                }

                .btn {
                    width: ${px2vw(140)};
                    height: ${px2vw(48)};
                    font-weight: 500;
                    font-size: ${px2vw(20)};

                    padding: ${px2vw(12)} ${px2vw(20)};
                }
            }
        }
    }
`;

export const Content = styled.div`
    padding: ${px2vw(32)} ${px2vw(123)} 0;
    position: relative;

    .imgMenu {
        width: ${px2vw(632)};
        height: ${px2vw(406)};
        position: absolute;

        margin-top: ${px2vw(37)};
        margin-left: ${px2vw(-70)};
    }
    
    .titulo {
        height: ${px2vw(260)};
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        margin-top: ${px2vw(172)};
        margin-bottom: 63px;
        padding: ${px2vw(87)} ${px2vw(101)} 0;
        border-radius: 8px;

        h1 {
            font-weight: 500;
            font-size: ${px2vw(40)};
        }
    }

    @media (max-width: 425px) {
        padding: ${px2vw(110)} ${px2vw(123)} 0;

        .imgMenu {
            width: ${px2vw(632)};
            height: ${px2vw(406)};
            margin-top: ${px2vw(90)};
        }

        .titulo {
            height: ${px2vw(410)};
            padding: ${px2vw(125)} ${px2vw(101)} 0;
            
            h1 {
                font-weight: 600;
                font-size: ${px2vw(60)};
            }

            span{
                width: ${px2vw(620)};
                font-size: ${px2vw(35)};
            }
        }
    };
`;

export const Cont = styled.div`   
    section {
        position: relative;
        h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: ${px2vw(45)};
            margin-bottom: ${px2vw(43)};
        }

        .categorias {
            max-width: 83vw;
            display: flex;
            align-items: center;
            
            .menucard {
                display: flex;
                padding: 0 ${px2vw(95)};
                gap: ${px2vw(50)};
                overflow-x: auto;
                scroll-behavior: smooth;

                div {
                    flex: none;
                }
            }

            .menucard::-webkit-scrollbar {
                display: none;
            }

            .btnEdit, .btnEditR {
                position: absolute;
                height: 80%;
                margin: 0 0 ${px2vw(85)} 0;

                background: linear-gradient(0deg, rgba(0, 10, 15, 0.372541) 0%, #000A0F 100%);
                svg {
                    font-size: ${px2vw(80)};
                }
            }

            .btnEdit {
                padding: 0 ${px2vw(90)} 0 0;
            }

            .btnEditR {
                padding: 0 0 0 ${px2vw(47)};
                left: 93%;
            }
        }
    }

    @media (max-width: 425px) {
        section{
            h2 {
                font-size: ${px2vw(70)};
            }

            .categorias {
                margin-left: ${px2vw(85)};

                .btnEdit, .btnEditR {
                    background: none;
                    margin: 0 0 ${px2vw(85)} ${px2vw(-85)}; 
                };

                .btnEdit{
                    margin-bottom: ${px2vw(47)};
                    padding: 0 ${px2vw(50)} 0 0;
                }

                .btnEditR {
                    margin-bottom: ${px2vw(47)};
                }
            }
        }
    };
`;