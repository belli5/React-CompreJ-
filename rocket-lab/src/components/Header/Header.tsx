import { useCarrinho } from '../../pages/Carrinho/CarrinhoContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import {
  HeaderContainer,
  Content,
  Logo,
  Menu,
  MenuItem,
  CarrinhoIcon,
  Contador,
} from './Header.styles';

function Header() {
  const { itens } = useCarrinho();

  return (
    <HeaderContainer>
      <Content>
        <Logo>CompreJá</Logo>

        <nav>
          <Menu>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/sobre">Sobre</Link>
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
          </Menu>
        </nav>
      </Content>
    </HeaderContainer>
  );
}

export default Header;
