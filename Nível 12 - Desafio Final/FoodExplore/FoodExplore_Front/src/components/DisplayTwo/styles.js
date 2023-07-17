import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { Link } from "react-router-dom";

export const Conteiner = styled.div`
    width: ${px2vw(411)};
    height: ${px2vw(67)};
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: ${px2vw(30)};
    
    margin-bottom: ${px2vw(35)};

    .displays{
        width: ${px2vw(140)};
        height: ${px2vw(45)};
        display: flex;
        align-items: center;
        gap: ${px2vw(30)};

        span {
            font-size: ${px2vw(30)};
        }

        .decrement {
            font-size: ${px2vw(42)};
        }
        
    }

    .insert{
        width: ${px2vw(270)};
        padding: ${px2vw(17)} ${px2vw(25)};
        font-size: ${px2vw(20)};
        height: auto;
    }

    @media (max-width: 425px) {
        width: ${px2vw(555)};
        height: ${px2vw(275)};
        display: flex;
        justify-content: center;
        gap: ${px2vw(137)};
        
        .displays {
            height: ${px2vw(130)};
            justify-content: center;

            span {
                font-size: ${px2vw(75)};
            }
            
            .decrement {
                font-size: ${px2vw(110)};
            }
        }

        .insert{
            width: ${px2vw(555)};
            height: ${px2vw(130)};
            font-size: ${px2vw(50)};

            font-size: 10px;
        }
    };
`;

export const NewNote = styled(Link)`
    .hide {
        display: none;
    }

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

    @media (max-width: 425px) {
        .hide {
            display: block;
        }

        .btnReceipt {
            width: ${px2vw(70)};
            margin-right: 10px;
        }
    };
`;