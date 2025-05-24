import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
`;

export const FormularioContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  padding: 24px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
`;

export const Titulo = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const ProdutosContainer = styled.div`
  display: flex;
  gap: 12px; /* Espaço entre os itens */
  overflow-x: auto; /* Permite a rolagem horizontal */
  padding-bottom: 12px;
  margin-bottom: 20px;
  max-width: 100%; /* Garante que o container ocupe a largura disponível */

  /* Remove a barra de rolagem */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProdutoContainer = styled.div`
  flex-shrink: 0;  /* Evita que o produto encolha */
  width: 180px;  /* Definindo uma largura fixa para cada produto */
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

export const ProdutoImagem = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: white;
`;

export const ProdutoInfo = styled.div`
  h4 {
    font-size: 1rem;
    margin-bottom: 4px;
    color: #333;
  }
  p {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 4px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 6px;
  color: #222;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  min-height: 80px;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
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

export const QrCodeContainer = styled.div`
  margin: 16px 0;
  padding: 12px;
  background-color: white;
  border-radius: 8px;
  width: fit-content;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

