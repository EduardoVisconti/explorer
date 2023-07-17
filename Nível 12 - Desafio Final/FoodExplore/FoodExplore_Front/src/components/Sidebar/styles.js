import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 114px auto 70px;
  grid-template-areas: 
  "header"
  "content"
  "brand";
  
  background-color: ${({ theme }) => theme.COLORS.Dark_500};
  position: fixed;
  height: 100vh;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 2;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  padding: 56px 0 0 28px;
  gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.Dark_600};

  > svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  span{
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    margin-top: 2px;
  }
`;

export const Brand = styled.div`
  grid-area: brand;
`;

export const Content = styled.div`
  padding: 0 28px;

  div {
    height: 48px;
    margin: 36px 0;
    padding: 12px 14px;

    svg{
      width: 25px;
      height: 25px;
    }

    input{
      font-size: 16px;
      margin-left: 14px;
    }
  }

  a {
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    margin-top: 2px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .sidebarr{
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    border-bottom: 1px solid #192227;
    padding: 10px;

    cursor: pointer;

    &:hover {
      background-color: black;
    }
  }
`;