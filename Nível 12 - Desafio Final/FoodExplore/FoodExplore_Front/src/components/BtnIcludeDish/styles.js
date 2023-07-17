import styled from "styled-components";
import px2vw from "../../utils/px2vw";

const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  width: ${px2vw(130)};
  height: ${px2vw(70)};
  border:0;
  padding: ${px2vw(17)};
  border-radius: ${px2vw(7)};
  font-weight: 500;
`;

export { Container }