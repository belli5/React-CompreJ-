import { useEffect, useState } from 'react';
import {
  Container,
  Title,
  PedidoCard,
  Lista,
  Botao,
  ProdutoCard,
  Img,
  ProdutoInfo,
  Price,
} from './Pedidos.styles';

function Pedidos() {
  const [pedidos, setPedidos] = useState<any[]>([]);
  const [pedidoSelecionado, setPedidoSelecionado] = useState<string | null>(null);

  useEffect(() => {
    const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    setPedidos(pedidosSalvos);
  }, []);

  const limparPedidos = () => {
    localStorage.removeItem('pedidos');
    setPedidos([]);
    setPedidoSelecionado(null);
  };

  const datasUnicas = [...new Set(pedidos.map((p) => p.data))];

  const pedidosPorData = (data: string) =>
    pedidos.filter((p) => p.data === data);

  return (
    <Container>
      <Title>Histórico de Pedidos</Title>

      {pedidos.length === 0 ? (
        <p>Você ainda não realizou nenhum pedido.</p>
      ) : pedidoSelecionado ? (
        <>
          <h3>Pedido realizado em: {pedidoSelecionado}</h3>
          <Lista>
            {pedidosPorData(pedidoSelecionado).map((pedido, index) =>
              'produto' in pedido ? (
                <ProdutoCard key={index}>
                  <Img src={pedido.produto.imagem} alt={pedido.produto.nome} />
                  <ProdutoInfo>
                    <h4>{pedido.produto.nome}</h4>
                    <p>Qtd: {pedido.quantidade}</p>
                    <Price>{pedido.total}</Price>
                  </ProdutoInfo>
                </ProdutoCard>
              ) : (
                pedido.produtos.map((prod: any) => (
                  <ProdutoCard key={prod.id}>
                    <Img src={prod.imagem} alt={prod.nome} />
                    <ProdutoInfo>
                      <h4>{prod.nome}</h4>
                      <p>Qtd: {prod.quantidade}</p>
                      <Price>{prod.preco}</Price>
                    </ProdutoInfo>
                  </ProdutoCard>
                ))
              )
            )}
          </Lista>
          <Botao onClick={() => setPedidoSelecionado(null)}>Voltar</Botao>
        </>
      ) : (
        datasUnicas.map((data) => (
          <PedidoCard key={data}>
            <h4>Pedido em: {data}</h4>
            <Botao onClick={() => setPedidoSelecionado(data)}>Visualizar</Botao>
          </PedidoCard>
        ))
      )}

      {pedidos.length > 0 && (
        <Botao onClick={limparPedidos} style={{ backgroundColor: '#d90429' }}>
          Limpar Histórico
        </Botao>
      )}
    </Container>
  );
}

export default Pedidos;
