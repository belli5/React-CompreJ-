// src/components/ProductCard/ProductCard.tsx
import {
  Card,
  Img,
  Title,
  Description,
  Price,
  Button
} from './ProductCard.styles';
import { useCarrinho } from '../../pages/Carrinho/CarrinhoContext';

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
};

interface ProductCardProps {
  produto: Produto;
}

function ProductCard({ produto }: ProductCardProps) {
  const { adicionarItem } = useCarrinho();

  return (
    <Card>
      <Img src={produto.imagem} alt={produto.nome} />
      <Title>{produto.nome}</Title>
      <Description>{produto.descricao}</Description>
      <Price>{produto.preco}</Price>
      <Button onClick={() => adicionarItem(produto)}>
        Adicionar ao Carrinho
      </Button>
    </Card>
  );
}

export default ProductCard;
