import styled from 'styled-components';
import px2vw from "../../utils/px2vw";
import { Link } from "react-router-dom";

export const Conteiner = styled.div`
    width: 100%;
    height: ${px2vw(105)};

    background: ${({ theme }) => theme.COLORS.Dark_600};

    .menuSearch, .menuOrder, .menu {
        display: none;
    }

    @media (max-width: 425px) {
        height: ${px2vw(220)};
        display: flex;
        justify-content: center;
    };
`;

export const Content = styled.div`
    width: 100%;
    height: ${px2vw(105)};
    padding: ${px2vw(24)} ${px2vw(123)};
    
    display: flex;
    justify-content: left;
    align-items: center;
    gap: ${px2vw(32)};

    .logs {
        display: flex;
        flex-direction: column;
        a {
            margin-left: 75%;
        }
    }
    
    button {
        width: ${px2vw(216)};
        height: ${px2vw(56)};

        margin-top: 0;
        padding: 0;
        border-radius: 5px;
    }

    .menu{
        font-size: ${px2vw(35)};
    }

    @media (max-width: 425px) {
        padding: 0 ${px2vw(115)};
        height: ${px2vw(220)};
        align-items: end;
        justify-content: center;

        .logo{
            height: ${px2vw(105)};
        }

        .searchDishes, .btnDish, .btnLogout {
            display: none;
        }

        .menuSearch {
            display: block;
            margin-right: ${px2vw(150)};
            font-size: ${px2vw(85)};
        }
        
        .menuOrder{
            display: block;
            margin-left: ${px2vw(400)};
        }

        .dvResponsive{
            width: 100%;
            margin-bottom: ${px2vw(53)};
            padding: 0;
        }

        .headerClient{
            display: flex;
            align-items: center;

            .menu{
                display: block;
                width: ${px2vw(103)};
                height: ${px2vw(103)};
                margin-right: ${px2vw(240)};
            }
        }
        
        .logs {
            width: 100%;
            flex-direction: row;
            align-items: center;
            a {
               margin: 0;
            }

            .menu{
                display: block;
                width: ${px2vw(103)};
                height: ${px2vw(103)};
                margin-right: ${px2vw(240)};

            }
        }
    };
`;

export const Search = styled.div`
    width: ${px2vw(620)};
    height: ${px2vw(48)};

    border-radius: 5px;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.Dark_900};

    svg {
        font-size: ${px2vw(42)};
        margin-left: 20%;
    }

    input {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
    
    svg {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`;

export const NewNote = styled(Link)`
    width: ${px2vw(216)};
    height: ${px2vw(56)};

    border-radius: 5px;
    
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: ${px2vw(36)};
        height: ${px2vw(31)};
        
        margin-right: ${px2vw(11)};
    }

    a {
        display: flex;
        align-items: center;

        width: ${px2vw(85)};
        height: ${px2vw(45)};
    }
`;