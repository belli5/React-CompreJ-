import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
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
  QuantidadeContainer,
  QuantidadeButton,
} from './FinalizarCompra.styles';

function FinalizarCompra() {
  const location = useLocation();
  const navigate = useNavigate();

  const produto = location.state?.produto;

  const [formaPagamento, setFormaPagamento] = useState('');
  const [chavePix, setChavePix] = useState('meuemail@exemplo.com');
  const [quantidade, setQuantidade] = useState(1);

  const precoNumerico = parseFloat(
    produto?.preco.replace('R$', '').replace(/\./g, '').replace(',', '.')
  ) || 0;

  const total = precoNumerico * quantidade;

  const totalFormatado = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  useEffect(() => {
    if (!produto) {
      navigate('/');
    }
  }, [produto, navigate]);

  if (!produto) {
    return null;
  }

  const aumentar = () => setQuantidade(quantidade + 1);
  const diminuir = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  function salvarPedidoNoLocalStorage() {
    const pedido = {
      produto,
      quantidade,
      formaPagamento,
      chavePix: formaPagamento === 'pix' ? chavePix : undefined,
      data: new Date().toLocaleString('pt-BR'),
      total: totalFormatado,
    };

    const pedidos = JSON.parse(localStorage.getItem('pedidos') || '[]');
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }

  const handleFinalizar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formaPagamento) {
      alert('Escolha uma forma de pagamento');
      return;
    }

    salvarPedidoNoLocalStorage();
    navigate('/pedidos');
  };

  const renderCamposPagamento = () => {
    switch (formaPagamento) {
      case 'cartao':
        return (
          <>
            <Label>Nome no Cartão</Label>
            <Input type="text" placeholder="Nome impresso no cartão" />

            <Label>Número do Cartão</Label>
            <Input type="text" placeholder="XXXX XXXX XXXX XXXX" />

            <Label>Validade</Label>
            <Input type="text" placeholder="MM/AA" />

            <Label>CVV</Label>
            <Input type="text" placeholder="CVV" />
          </>
        );
      case 'pix':
        return (
          <>
            <Label>Chave Pix</Label>
            <Input
              type="text"
              value={chavePix}
              onChange={(e) => setChavePix(e.target.value)}
              placeholder="Digite sua chave Pix"
            />

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
  };

  return (
    <Container>
      <ProdutoContainer>
        <Titulo>Resumo do Pedido</Titulo>
        <ProdutoImagem src={produto.imagem} alt={produto.nome} />
        <ProdutoInfo>
          <h3>{produto.nome}</h3>
          <p>{produto.descricao}</p>
          <strong>Preço Unitário: {produto.preco}</strong>

          <QuantidadeContainer>
            <QuantidadeButton onClick={diminuir}>-</QuantidadeButton>
            <span>{quantidade}</span>
            <QuantidadeButton onClick={aumentar}>+</QuantidadeButton>
          </QuantidadeContainer>

          <p><strong>Total: {totalFormatado}</strong></p>
        </ProdutoInfo>
      </ProdutoContainer>

      <FormularioContainer>
        <Titulo>Finalizar Compra</Titulo>
        <Form>
          <Label>Nome Completo</Label>
          <Input type="text" placeholder="Digite seu nome completo" />

          <Label>Endereço</Label>
          <Input type="text" placeholder="Rua, Número, Bairro, Cidade" />

          <Label>Forma de Pagamento</Label>
          <Select
            value={formaPagamento}
            onChange={(e) => setFormaPagamento(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="pix">Pix</option>
            <option value="cartao">Cartão</option>
            <option value="boleto">Boleto</option>
          </Select>

          {renderCamposPagamento()}

          <Label>Informações Adicionais</Label>
          <Textarea placeholder="Ex.: Portão, andar, referência..." />

          <Button type="submit" onClick={handleFinalizar}>
            Finalizar Pedido
          </Button>
        </Form>
      </FormularioContainer>
    </Container>
  );
}

export default FinalizarCompra;
