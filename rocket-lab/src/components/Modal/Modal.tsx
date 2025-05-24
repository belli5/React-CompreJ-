import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useCarrinho } from '../../pages/Carrinho/CarrinhoContext';
import {
  Container,
  ProdutoContainer,
  ProdutoImagem,
  ProdutoInfo,
  Titulo,
  FormularioContainer,
  Form,
  Input,
  Textarea,
  Label,
  Button,
  Select,
  QrCodeContainer,
  ProdutosContainer,
} from './Modal.style';

type ProdutoCarrinho = {
  id: number;
  nome: string;
  preco: string;
  quantidade: number;
  imagem?: string;
};

type ModalFinalizarCompraProps = {
  produtos: ProdutoCarrinho[];
  onFechar: () => void;
  onFinalizar: () => void;
};

export function ModalFinalizarCompra({ produtos, onFechar, onFinalizar }: ModalFinalizarCompraProps) {
  const { limparCarrinho } = useCarrinho();

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [endereco, setEndereco] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [infoAdicional, setInfoAdicional] = useState('');
  const [chavePix, setChavePix] = useState('meuemail@exemplo.com');

  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [validadeCartao, setValidadeCartao] = useState('');
  const [cvvCartao, setCvvCartao] = useState('');

  const total = produtos.reduce((acc, item) => {
    const precoNum = Number(item.preco.replace(/[^\d,]/g, '').replace(',', '.'));
    return acc + precoNum * item.quantidade;
  }, 0);

  function salvarPedidoNoLocalStorage() {
    const pedido = {
      produtos,
      nomeCompleto,
      endereco,
      formaPagamento,
      infoAdicional,
      data: new Date().toLocaleString('pt-BR'),
      total: total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    };

    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nomeCompleto || !endereco || !formaPagamento) {
      alert('Preencha nome completo, endereço e forma de pagamento');
      return;
    }

    if (formaPagamento === 'cartao' &&
      (!nomeCartao || !numeroCartao || !validadeCartao || !cvvCartao)
    ) {
      alert('Preencha todos os dados do cartão');
      return;
    }

    salvarPedidoNoLocalStorage();
    limparCarrinho(); // 🔥 limpa o carrinho após finalizar
    alert('Pedido realizado com sucesso!');
    onFinalizar();
  }

  function renderCamposPagamento() {
    switch (formaPagamento) {
      case 'cartao':
        return (
          <>
            <Label>Nome no Cartão</Label>
            <Input value={nomeCartao} onChange={e => setNomeCartao(e.target.value)} placeholder="Nome no cartão" />
            <Label>Número do Cartão</Label>
            <Input value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)} placeholder="XXXX XXXX XXXX XXXX" />
            <Label>Validade</Label>
            <Input value={validadeCartao} onChange={e => setValidadeCartao(e.target.value)} placeholder="MM/AA" />
            <Label>CVV</Label>
            <Input value={cvvCartao} onChange={e => setCvvCartao(e.target.value)} placeholder="CVV" type="password" />
          </>
        );
      case 'pix':
        return (
          <>
            <Label>Chave Pix</Label>
            <Input value={chavePix} onChange={e => setChavePix(e.target.value)} placeholder="Digite sua chave Pix" />
            <Label>QR Code para Pagamento</Label>
            <QrCodeContainer>
              <QRCodeCanvas value={chavePix} size={180} />
            </QrCodeContainer>
          </>
        );
      case 'boleto':
        return <p>O boleto será gerado após finalizar a compra.</p>;
      default:
        return null;
    }
  }

  return (
    <Container onClick={onFechar}>
      <FormularioContainer onClick={e => e.stopPropagation()}>
        <Titulo>Finalizar Compra</Titulo>

        <ProdutosContainer>
          {produtos.map(prod => (
            <ProdutoContainer key={prod.id}>
              <ProdutoImagem src={prod.imagem} alt={prod.nome} />
              <ProdutoInfo>
                <h4>{prod.nome}</h4>
                <p>Qtd: {prod.quantidade}</p>
                <p>{prod.preco}</p>
              </ProdutoInfo>
            </ProdutoContainer>
          ))}
        </ProdutosContainer>

        <strong>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>

        <Form onSubmit={handleSubmit}>
          <Label>Nome Completo</Label>
          <Input value={nomeCompleto} onChange={e => setNomeCompleto(e.target.value)} />

          <Label>Endereço</Label>
          <Input value={endereco} onChange={e => setEndereco(e.target.value)} />

          <Label>Forma de Pagamento</Label>
          <Select value={formaPagamento} onChange={e => setFormaPagamento(e.target.value)}>
            <option value="">Selecione</option>
            <option value="pix">Pix</option>
            <option value="cartao">Cartão</option>
            <option value="boleto">Boleto</option>
          </Select>

          {renderCamposPagamento()}

          <Label>Informações Adicionais</Label>
          <Textarea value={infoAdicional} onChange={e => setInfoAdicional(e.target.value)} />

          <Button type="submit">Finalizar Pedido</Button>
          <Button type="button" style={{ marginLeft: 10, backgroundColor: '#ccc', color: '#333' }} onClick={onFechar}>
            Cancelar
          </Button>
        </Form>
      </FormularioContainer>
    </Container>
  );
}
