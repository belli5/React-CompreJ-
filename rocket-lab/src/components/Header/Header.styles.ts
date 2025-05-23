import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #0057D9;
  color: white;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
`;

export const MenuItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #a7d5ff;
    }
  }
`;

export const CarrinhoIcon = styled.div`
  position: relative;
  font-size: 24px;
  cursor: pointer;
`;

export const Contador = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
`;
