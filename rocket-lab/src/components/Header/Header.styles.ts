import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #0057d9;
  padding: 16px 0;
  color: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: -60px; 
`;

export const Menu = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
`;

export const MenuItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s, transform 0.2s;

    &:hover {
      color: #d1e7ff;
      transform: translateY(-2px);
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
    }
  }
`;

export const CarrinhoIcon = styled.div`
  position: relative;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Contador = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 50%;
`;
