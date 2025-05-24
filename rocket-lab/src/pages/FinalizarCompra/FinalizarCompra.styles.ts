import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProdutoContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ProdutoImagem = styled.img`
  width: 100%;
  max-width: 250px; // 🔥 diminuído para melhor visualização
  height: auto;
  margin: 0 auto 20px;
  display: block;
`;

export const ProdutoInfo = styled.div`
  h3 {
    margin-bottom: 8px;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 8px;
    color: #555;
  }

  strong {
    color: #0057D9;
    font-size: 1.1rem;
  }

  span {
    font-weight: 600;
    font-size: 1.1rem;
  }
`;

export const FormularioContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-height: 80px;
`;

export const Button = styled.button`
  background-color: #0057D9;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0041a8;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const QrCodeContainer = styled.div`
  margin: 16px 0;
  padding: 12px;
  background-color: white;
  border-radius: 8px;
  width: fit-content;
`;

export const QuantidadeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; // 🔥 Centraliza o contador
  gap: 16px;
  margin: 16px 0;
`;

export const QuantidadeButton = styled.button`
  background-color: #0057D9;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0041a8;
  }
`;
