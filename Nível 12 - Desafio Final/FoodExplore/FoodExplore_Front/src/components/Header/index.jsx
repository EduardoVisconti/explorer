import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Conteiner, Content, Search, NewNote } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar';

import ImgMenu from "../../assets/Menu.svg";
import ImgLogo from "../../assets/LogFoodExplorer.png";
import ImgOrder from "../../assets/Frame 5967.svg";
import SignOut from "../../assets/SignOut.png";

export function Header({ children, eventss, events, btnTitle, btnLogo, titleAdm }) {
    const { user, signOut } = useAuth();

    /* const navigate = useNavigate(); */
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    const [order, setOrder] = useState(0);

    function handleLogout() {
        signOut();
    }

    return (
        <Conteiner>
            <Content>
                <div className="dvResponsive">
                    {user.is_admin == 1 ? (
                        <div className="logs">
                            <FaBars onClick={showSiderbar} className="menu hide"/>
                            {sidebar && <Sidebar active={setSidebar} />}
                            <img src={ImgLogo} alt="Logo" />
                            <a className="adm" href="#">{"admin"}</a>
                        </div>
                        ) :  (
                            <div className="headerClient hide">
                                {/* <img src={ImgMenu} alt="Menu" className="menuSearch hide"/> */}
                                <FaBars onClick={showSiderbar} className="menu hide"/>
                                {sidebar && <Sidebar active={setSidebar} />}
                                <img src={ImgLogo} alt="Logo" className="logo"/>
                                <img src={ImgOrder} alt="Order" className="menuOrder hide"/>
                            </div>
                    )}
                </div>

                <Search className="searchDishes hide">
                    <AiOutlineSearch />
                    <Search>
                        {children}
                    </Search>
                </Search>

                <div className="btnDish hide">
                    {user.is_admin == 1 ? (
                        <NewNote 
                            to={`/newDishes`}>
                            {"Novo prato"}
                        </NewNote>
                        
                        ) :  (
                        <NewNote 
                            to={`/newOrder`}>
                            {< BsReceiptCutoff />}
                            {`Pedidos (${order})`}
                        </NewNote>
                    )}
                </div>
                
                <Link 
                    className="btnLogout hide"
                    onClick={handleLogout}  
                    to={`/`}>
                    <img src={SignOut} alt="Logo" 
                />
                </Link>
            </Content>
        </Conteiner>
    )
};