import React, { useState } from 'react';
import { useCarrinho } from '../../pages/Carrinho/CarrinhoContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import SidebarPerfil from '../SidebarPerfil/SidebarPerfil';
import {
  HeaderContainer,
  Container,
  Logo,
  Menu,
  MenuItem,
  CarrinhoIcon,
  Contador,
  SearchContainer,
  SearchInput,
  PerfilIcon,
} from './Header.styles';

function Header() {
  const { itens } = useCarrinho();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Container>
          <Logo>
            <img src="/Imagens/75c11c6c-7691-4454-bb3f-3ecac5bafa22.png" alt="Logo CompreJá" />
          </Logo>

          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Pesquisar produtos..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchContainer>

          <nav>
            <Menu>
              <MenuItem>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/pedidos">Meus Pedidos</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contato">Contato</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/carrinho">
                  <CarrinhoIcon>
                    <FaShoppingCart />
                    {itens.length > 0 && <Contador>{itens.length}</Contador>}
                  </CarrinhoIcon>
                </Link>
              </MenuItem>
              <MenuItem>
                <PerfilIcon onClick={openSidebar}>
                  <FaUserCircle />
                </PerfilIcon>
              </MenuItem>
            </Menu>
          </nav>
        </Container>
      </HeaderContainer>

      {/* Sidebar do Perfil */}
      <SidebarPerfil isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}

export default Header;
