import { useState } from 'react';
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
  ProdutosContainer, // Este container será usado para os produtos
} from './Modal.style';

type ProdutoCarrinho = {
  id: number;
  nome: string;
  preco: string; // "R$ 249,90"
  quantidade: number;
  imagem?: string;
};

type ModalFinalizarCompraProps = {
  produtos: ProdutoCarrinho[];
  onFechar: () => void;
  onFinalizar: (dados: {
    nomeCompleto: string;
    endereco: string;
    formaPagamento: string;
    chavePix?: string;
    nomeCartao?: string;
    numeroCartao?: string;
    validadeCartao?: string;
    cvvCartao?: string;
    infoAdicional?: string;
  }) => void;
};

export function ModalFinalizarCompra({ produtos, onFechar, onFinalizar }: ModalFinalizarCompraProps) {
  // Estados dos campos comuns
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [endereco, setEndereco] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [infoAdicional, setInfoAdicional] = useState('');

  // Dados cartão
  const [nomeCartao, setNomeCartao] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [validadeCartao, setValidadeCartao] = useState('');
  const [cvvCartao, setCvvCartao] = useState('');

  // Chave PIX padrão
  const [chavePix, setChavePix] = useState('meuemail@exemplo.com');

  // Calcular total do carrinho
  const total = produtos.reduce((acc, item) => {
    const precoNum = Number(item.preco.replace(/[^\d,]/g, '').replace(',', '.'));
    return acc + precoNum * item.quantidade;
  }, 0);

  function renderCamposPagamento() {
    switch (formaPagamento) {
      case 'cartao':
        return (
          <>
            <Label>Nome no Cartão</Label>
            <Input
              type="text"
              placeholder="Nome impresso no cartão"
              value={nomeCartao}
              onChange={e => setNomeCartao(e.target.value)}
            />

            <Label>Número do Cartão</Label>
            <Input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              value={numeroCartao}
              onChange={e => setNumeroCartao(e.target.value)}
            />

            <Label>Validade</Label>
            <Input
              type="text"
              placeholder="MM/AA"
              value={validadeCartao}
              onChange={e => setValidadeCartao(e.target.value)}
            />

            <Label>CVV</Label>
            <Input
              type="password"
              placeholder="CVV"
              value={cvvCartao}
              onChange={e => setCvvCartao(e.target.value)}
            />
          </>
        );
      case 'pix':
        return (
          <>
            <Label>Chave Pix</Label>
            <Input
              type="text"
              value={chavePix}
              onChange={e => setChavePix(e.target.value)}
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
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validações básicas
    if (!nomeCompleto || !endereco || !formaPagamento) {
      alert('Preencha nome completo, endereço e forma de pagamento');
      return;
    }

    if (formaPagamento === 'cartao') {
      if (!nomeCartao || !numeroCartao || !validadeCartao || !cvvCartao) {
        alert('Preencha todos os dados do cartão');
        return;
      }
    }

    onFinalizar({
      nomeCompleto,
      endereco,
      formaPagamento,
      chavePix: formaPagamento === 'pix' ? chavePix : undefined,
      nomeCartao: formaPagamento === 'cartao' ? nomeCartao : undefined,
      numeroCartao: formaPagamento === 'cartao' ? numeroCartao : undefined,
      validadeCartao: formaPagamento === 'cartao' ? validadeCartao : undefined,
      cvvCartao: formaPagamento === 'cartao' ? cvvCartao : undefined,
      infoAdicional,
    });
  }

  return (
    <Container onClick={onFechar}>
      <FormularioContainer onClick={e => e.stopPropagation()}>
        <Titulo>Finalizar Compra</Titulo>

        {/* Container de produtos com rolagem horizontal */}
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

        <strong>Total: R$ {total.toFixed(2).replace('.', ',')}</strong>

        {/* Formulário */}
        <Form onSubmit={handleSubmit}>
          <Label>Nome Completo</Label>
          <Input
            type="text"
            placeholder="Digite seu nome completo"
            value={nomeCompleto}
            onChange={e => setNomeCompleto(e.target.value)}
          />

          <Label>Endereço</Label>
          <Input
            type="text"
            placeholder="Rua, Número, Bairro, Cidade"
            value={endereco}
            onChange={e => setEndereco(e.target.value)}
          />

          <Label>Forma de Pagamento</Label>
          <Select
            value={formaPagamento}
            onChange={e => setFormaPagamento(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="pix">Pix</option>
            <option value="cartao">Cartão de Crédito/Débito</option>
            <option value="boleto">Boleto</option>
          </Select>

          {renderCamposPagamento()}

          <Label>Informações Adicionais</Label>
          <Textarea
            placeholder="Ex.: Portão, andar, referência..."
            value={infoAdicional}
            onChange={e => setInfoAdicional(e.target.value)}
          />

          <Button type="submit">Finalizar Pedido</Button>
          <Button
            type="button"
            style={{ marginLeft: 10, backgroundColor: '#ccc', color: '#333' }}
            onClick={onFechar}
          >
            Cancelar
          </Button>
        </Form>
      </FormularioContainer>
    </Container>
  );
}
