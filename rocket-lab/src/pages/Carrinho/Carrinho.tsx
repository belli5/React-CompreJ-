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
  Button
} from './Carrinho.styles';

function Carrinho() {
  const { itens, removerItem } = useCarrinho();

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
                <Button variant="comprar">Comprar</Button>
                <Button variant="remover" onClick={() => removerItem(item.id)}>
                  Remover
                </Button>
              </Buttons>
            </Infos>
          </Item>
        ))
      )}
    </CarrinhoContainer>
  );
}

export default Carrinho;
