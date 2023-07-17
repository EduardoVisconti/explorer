import React from 'react';
import { Container, Content, Header, Brand } from './styles';
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { AiOutlineSearch } from "react-icons/ai";
import { FaTimes } from 'react-icons/fa';

import { Footer } from '../Footer';
import { InputSearch } from '../InputSearch/index';

const Sidebar = ({ active }) => {
  const { user, signOut } = useAuth();

  const closeSidebar = () => {
    active(false)
  }

  function handleLogout() {
    signOut();
  }

  return (
    <Container sidebar={active}>
      < Header>
        <FaTimes onClick={closeSidebar} 
          title='Menu'
        />  
        <span>Menu</span>
      </Header>
      <Content>
        <InputSearch
          Icon={<AiOutlineSearch />}
          placeholder="Busque por pratos ou ingredientes"
          /* onChange={(e) => setSearch(e.target.value)} */
        /> 
        {user.is_admin == 1 ? (
          <div>
            <Link
              className='sidebarr'
              to={`/newDishes`}
            >
              Novo prato
            </Link>
            <Link
              className='sidebarr'
              to={"/"}
              onClick={handleLogout}
            >
              Sair
            </Link>
          </div>
            ) :  (
            <div>
              <Link
                className='sidebarr'
                to={"/"}
                onClick={handleLogout}
              >
                Sair
              </Link>
            </div>
        )}
      </Content>
      <Brand>
        <Footer />
      </Brand>
    </Container>
  )
}

export default Sidebar