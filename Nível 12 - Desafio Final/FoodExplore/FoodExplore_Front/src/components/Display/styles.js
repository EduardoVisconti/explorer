import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: ${px2vw(290)};
    height: ${px2vw(67)};
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
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
    font-size: ${px2vw(20)};
    height: auto;
    }

    @media (max-width: 425px) {
        width: ${px2vw(555)};
        height: ${px2vw(275)};
        display: flex;
        flex-direction: column;
        
        .displays {
            height: ${px2vw(110)};
            justify-content: center;

            span {
                font-size: ${px2vw(50)};
            }
            
            .decrement {
                font-size: ${px2vw(100)};
            }
        }

        .insert{
            width: ${px2vw(555)};
            height: ${px2vw(110)};
            font-size: ${px2vw(50)};
        }
    };
`;