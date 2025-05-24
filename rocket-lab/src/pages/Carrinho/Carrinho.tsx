import { useState } from 'react';
import { useCarrinho } from './CarrinhoContext';
import {
  CarrinhoContainer,
  Titulo,
  Item,
  Imagem,
  Infos,
  Nome,
  Preco,
  Buttons,
  Button,
  QuantidadeContainer,
  FinalizarCompraContainer,
  FinalizarCompraButton,
} from './Carrinho.styles';

import { ModalFinalizarCompra } from '../../components/Modal/Modal'; // ajuste conforme seu projeto
import { useNavigate } from 'react-router-dom';

function Carrinho() {
  const {
    itens,
    removerItem,
    aumentarQuantidade,
    diminuirQuantidade,
  } = useCarrinho();

  const [modalAberto, setModalAberto] = useState(false);
  const navigate = useNavigate();

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  const handleFinalizarCompra = () => {
    alert('Compra finalizada com sucesso!');
    fecharModal();
    navigate('/pedidos'); // redireciona para a página de pedidos
  };

  return (
    <CarrinhoContainer>
      <Titulo>Seu Carrinho</Titulo>

      {itens.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        itens.map((item) => (
          <Item key={item.id}>
            <Imagem src={item.imagem} alt={item.nome} />

            <Infos>
              <Nome>{item.nome}</Nome>
              <p>{item.descricao}</p>
              <Preco>{item.preco}</Preco>

              <Buttons>
                <Button variant="remover" onClick={() => removerItem(item.id)}>
                  Remover
                </Button>
              </Buttons>
            </Infos>

            <QuantidadeContainer>
              <Button onClick={() => diminuirQuantidade(item.id)}>-</Button>
              <span>{item.quantidade}</span>
              <Button onClick={() => aumentarQuantidade(item.id)}>+</Button>
            </QuantidadeContainer>
          </Item>
        ))
      )}

      {itens.length > 0 && (
        <FinalizarCompraContainer>
          <FinalizarCompraButton onClick={abrirModal}>
            Finalizar Compra
          </FinalizarCompraButton>
        </FinalizarCompraContainer>
      )}

      {modalAberto && (
        <ModalFinalizarCompra
          produtos={itens}
          onFechar={fecharModal}
          onFinalizar={handleFinalizarCompra}
        />
      )}
    </CarrinhoContainer>
  );
}

export default Carrinho;
