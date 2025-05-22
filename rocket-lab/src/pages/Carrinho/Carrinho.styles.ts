import styled from 'styled-components';

export const CarrinhoContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 24px;
  color: #333;
`;

export const Item = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export const Imagem = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;

export const Infos = styled.div`
  flex: 1;
`;

export const Nome = styled.h3`
  margin-bottom: 8px;
`;

export const Preco = styled.div`
  color: #0057D9;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button<{ variant?: 'comprar' | 'remover' }>`
  padding: 8px 16px;
  border-radius: 6px;
  border: ${({ variant }) => (variant === 'remover' ? '2px solid #ff0000' : 'none')};
  background-color: ${({ variant }) => (variant === 'remover' ? 'transparent' : '#0057D9')};
  color: ${({ variant }) => (variant === 'remover' ? '#ff0000' : 'white')};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'remover' ? '#ff0000' : '#0041a8'};
    color: ${({ variant }) => (variant === 'remover' ? 'white' : 'white')};
  }
`;
