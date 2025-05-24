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

import { ModalFinalizarCompra } from '../../components/Modal/Modal'; // ajuste o caminho conforme sua estrutura

function Carrinho() {
  const {
    itens,
    removerItem,
    aumentarQuantidade,
    diminuirQuantidade,
  } = useCarrinho();

  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  const handleFinalizarCompra = (dados: { endereco: string; formaPagamento: string }) => {
    console.log('Dados da compra:', dados);
    // Aqui você pode disparar o processo de checkout / salvar pedido, etc
    alert('Compra finalizada com sucesso!');
    fecharModal();
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
