import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: ${px2vw(430)};
    height: ${px2vw(650)};

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: ${px2vw(70)};

    background-color: ${({ theme }) => theme.COLORS.Dark_200};
    border: 1px solid #000204;
    border-radius: ${px2vw(11)};

    #dish {
        margin-left: 80%;

        .btnEditPencil {
            svg{
                font-size: ${px2vw(35)};
            }
        }
    }

    img {
        width: ${px2vw(245)};
    }

    .imgEdit {
        cursor: pointer;
        transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
        background-size:contain;
        background-position: -250px center;
        background-repeat: no-repeat;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .imgEdit:hover {
        transform: scale(1.1);
        background-position: -60px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    strong {
        font-weight: 700;
        font-size: ${px2vw(35)};

        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        display: flex;
        align-items: center;

        margin-top: ${px2vw(21)};

        svg {
            font-size: ${px2vw(42)};
        }
    }

    p{
        height: ${px2vw(65)}; 
        font-size: ${px2vw(20)};
        text-align: center;
        padding: 0px ${px2vw(35)};

        margin-bottom: ${px2vw(20)};
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: ${px2vw(45)};
        
        margin-bottom: ${px2vw(20)};

        color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    @media (max-width: 425px) {
        width: ${px2vw(720)};
        height: ${px2vw(990)};

        .description {
            display: none;
        }

        #dish {
            .btnEditPencil {
                svg{
                    font-size: ${px2vw(82)};

                    margin-top: 10px;
                }
            }
        }

        img {
            width: ${px2vw(302)};
        }

        strong {
            font-weight: 500;
            font-size: ${px2vw(48)};
        }

        h1 {
            font-weight: 400;
            font-size: ${px2vw(55)};
            
            margin-top: 12px;
        }        
    };

`;
