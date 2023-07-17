import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    height: 100vh;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    display: flex;
    justify-content: space-between;
    padding: 0 ${px2vw(153)} ;
    margin: 0 auto;

    align-items: center;

    img {
        width: ${px2vw(324)};
        height: ${px2vw(50)};
    }

    h1, div, button, a {
        margin-bottom: ${px2vw(32)};
    }

    p {
        text-align: start;
        margin-bottom: 8px;
    }

    a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    section {
        display: flex;
        flex-direction: column;
        text-align: left;
        
        input {
            width: ${px2vw(348)};
            border-radius: 8px;
            
            background: ${({ theme }) => theme.COLORS.Dark_900};
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;

        padding-top: ${px2vw(530)};

        h1, div, button, a {
            margin-bottom: ${px2vw(32)};
        }

        p {
            text-align: start;
            margin-bottom: 8px;
        }

        section {
            
            input {

                width: ${px2vw(348)};
                height: ${px2vw(148)};
            }
        }

        img {
            width: ${px2vw(935)};
            height: ${px2vw(170)};

            margin-bottom: ${px2vw(250)};
        }

        .hide {
            display: none;
        } 

        button {
            font-size: ${px2vw(54)};
            height: ${px2vw(187)};

            margin-bottom: ${px2vw(107)};
        }
    }
`;

export const Form = styled.form`
    width: ${px2vw(476)};
    height: ${px2vw(532)};

    background: ${({ theme }) => theme.COLORS.Dark_700};

    border-radius: ${px2vw(16)};
    padding: ${px2vw(64)};
    
    text-align: center;

    input {
        height: ${px2vw(40)};
        font-size: ${px2vw(16)};
    }

    button {
        margin-top: 0;
    }

    h1 {
        font-weight: 500;
        font-size: ${px2vw(32)};

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    h2 {
        margin-bottom: 8px;
    }

    @media (max-width: 768px) {
        width: ${px2vw(1070)};
        height: 100vh;
        padding: 0;

        background: none;

        h2 {
            font-size: ${px2vw(54)};
        }

        a {
            font-size: ${px2vw(54)};
        }

        section {
            margin-bottom: ${px2vw(80)};

            input {
                font-size: ${px2vw(54)};
                width: ${px2vw(1070)};

                margin-bottom: 0;
            }
        }
    }
`;