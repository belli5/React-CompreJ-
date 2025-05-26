import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #0057d9;
  padding: 10px 0;
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 110px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: -100px;

  img {
    height: 120px;
    margin-right: 10px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const MenuItem = styled.li`
  a {
    color: white;
    font-weight: 600;
    font-size: 28px;
    transition: color 0.3s;

    &:hover {
      color: #b3d1ff;
    }
  }
`;

export const CarrinhoIcon = styled.div`
  position: relative;
  font-size: 2.0rem;
  cursor: pointer;
  color: #f5c518;
`;

export const PerfilIcon = styled.div`
  font-size: 3.5rem;
  cursor: pointer;
  color: white;
  transition: color 0.3s;
  &:hover {
    color: #b3d1ff;
  }
`;

export const Contador = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #ff0000;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const SearchContainer = styled.div`
  margin: 0 20px;
  flex-grow: 2;
  min-width: 300px;
  max-width: 600px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  outline: none;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;

  svg {
    color: white;
    cursor: pointer;
    font-size: 1.8rem;
  }

  svg:hover {
    color: #b3d1ff;
  }
`;
