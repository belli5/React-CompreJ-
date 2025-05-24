import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 100px auto 60px;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const PedidoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  margin-bottom: 16px;
`;

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

export const ProdutoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

export const ProdutoInfo = styled.div`
  flex: 1;

  h4 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 4px;
  }
`;

export const Price = styled.p`
  color: #0057D9;
  font-weight: bold;
`;

export const Botao = styled.button`
  background-color: #0057d9;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
    background-color: #0041a8;
  }
`;
