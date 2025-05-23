import { useNavigate } from 'react-router-dom';
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

function Carrinho() {
  const {
    itens,
    removerItem,
    aumentarQuantidade,
    diminuirQuantidade,
  } = useCarrinho();
  const navigate = useNavigate();

  const finalizarCompraGeral = () => {
    navigate('/finalizar', { state: { produtos: itens } });
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
                <Button onClick={() => navigate('/finalizar', { state: { produto: item } })}>
                  Comprar
                </Button>
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
          <FinalizarCompraButton onClick={finalizarCompraGeral}>
            Finalizar Compra
          </FinalizarCompraButton>
        </FinalizarCompraContainer>
      )}
    </CarrinhoContainer>
  );
}

export default Carrinho;
