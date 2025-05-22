import { useCarrinho } from '../Carrinho/CarrinhoContext';
import {
  Main,
  Title,
  Grid,
  Card,
  Img,
  ProductName,
  Description,
  Price,
  Button
} from './Home.styles';

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
};

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Fone Bluetooth',
    descricao: 'Fone com cancelamento de ruído e alta qualidade sonora.',
    preco: 'R$ 199,90',
    imagem: '/Imagens/17152652190881.webp',
  },
  {
    id: 2,
    nome: 'Smartwatch',
    descricao: 'Relógio inteligente com monitoramento de saúde.',
    preco: 'R$ 349,90',
    imagem: '/Imagens/relogio-igpsport-lw10-smart-watch-gps-com-monitor-cardiaco-65b4182547e38.png',
  },
  {
    id: 3,
    nome: 'Câmera DSLR',
    descricao: 'Câmera profissional com alta definição.',
    preco: 'R$ 2.499,90',
    imagem: '/Imagens/01_EOS_T7_NOVAFOTO.jpg',
  },
  {
    id: 4,
    nome: 'Notebook Gamer',
    descricao: 'Notebook com placa de vídeo dedicada e alto desempenho.',
    preco: 'R$ 5.999,90',
    imagem: '/Imagens/1g.avif',
  },

  {
    id: 5,
    nome: 'Caixa de Som',
    descricao: 'BumBox com melhor sonoridade e conexão Wifi.',
    preco: 'R$ 1.999,90',
    imagem: '/Imagens/caixa_de_som_portatil_jbl_boombox_3_wi_fi_bluetooth_preto_jblbb3wifiblkbr_4902_1_44ec36274e24e5e892fc573dc2ff3596.webp',
  },
];

function Home() {
  const { adicionarItem } = useCarrinho();

  return (
    <Main>
      <Title>Nossos Produtos</Title>
      <Grid>
        {produtos.map((produto) => (
          <Card key={produto.id}>
            <Img src={produto.imagem} alt={produto.nome} />
            <ProductName>{produto.nome}</ProductName>
            <Description>{produto.descricao}</Description>
            <Price>{produto.preco}</Price>
            <Button onClick={() => adicionarItem(produto)}>
              Adicionar ao Carrinho
            </Button>
          </Card>
        ))}
      </Grid>
    </Main>
  );
}

export default Home;
