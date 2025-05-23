import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarrinho } from '../Carrinho/CarrinhoContext';
import {
  Main,
  Section,
  Title,
  Carousel,
  Card,
  Img,
  ProductName,
  Description,
  Price,
  AddButton,
  BuyButton,
  LeftArrow,
  RightArrow,
  CarouselContainer
} from './Home.styles';

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
};

type Categoria = {
  id: number;
  nome: string;
  produtos: Produto[];
};

const categorias: Categoria[] = [
  {
    id: 1,
    nome: 'Tecnologia',
    produtos: [
      { id: 1, nome: 'Notebook Gamer', descricao: 'Alto desempenho para jogos.', preco: 'R$ 5.999,90', imagem: '/Imagens/1g.avif' },
      { id: 2, nome: 'Smartwatch', descricao: 'Monitoramento de saúde.', preco: 'R$ 349,90', imagem: '/Imagens/relogio-igpsport-lw10-smart-watch-gps-com-monitor-cardiaco-65b4182547e38.png' },
      { id: 3, nome: 'Fone Bluetooth', descricao: 'Cancelamento de ruído.', preco: 'R$ 199,90', imagem: '/Imagens/17152652190881.webp' },
      { id: 4, nome: 'Câmera DSLR', descricao: 'Alta definição para fotos.', preco: 'R$ 2.499,90', imagem: '/Imagens/01_EOS_T7_NOVAFOTO.jpg' },
      { id: 5, nome: 'Caixa de som', descricao: 'Som de alta qualidade.', preco: 'R$ 1.099,90', imagem: '/Imagens/caixa_de_som_portatil_jbl_boombox_3_wi_fi_bluetooth_preto_jblbb3wifiblkbr_4902_1_44ec36274e24e5e892fc573dc2ff3596.webp' },
    ],
  },

  {
    id: 2,
    nome: 'Produtos de Beleza',
    produtos: [
      { id: 6, nome: 'Secador de Cabelo', descricao: 'Alta potência e tecnologia iônica.', preco: 'R$ 399,90', imagem: '/Imagens/1xg.avif' },
      { id: 7, nome: 'Chapinha', descricao: 'Alisa e modela com efeito profissional.', preco: 'R$ 299,90', imagem: '/Imagens/chapinha_prancha_evotech_1_75_480f_preta_salles_profissional_1079_1_cad2c581e5747cd064fe82455d47308d.webp' },
      { id: 8, nome: 'Escova Elétrica', descricao: 'Modelagem fácil e rápida.', preco: 'R$ 249,90', imagem: '/Imagens/OralB-PI-80682860-BRZ-01.webp' },
      { id: 9, nome: 'Kit Maquiagem', descricao: 'Completo com sombras, batons e blush.', preco: 'R$ 199,90', imagem: '/Imagens/kit-de-maquiagem-conjunto-completo-com-8-itens-inclusos-e-bolsa-gratis.jpg' },
      { id: 10, nome: 'Aparelho de Barbeador', descricao: 'Perfeito para cortes precisos.', preco: 'R$ 149,90', imagem: '/Imagens/688372-800-auto.webp' },
    ],
  },

  {
    id: 3,
    nome: 'Casa e Cozinha',
    produtos: [
      { id: 11, nome: 'Air Fryer', descricao: 'Fritadeira sem óleo.', preco: 'R$ 499,90', imagem: '/Imagens/fritadeira-eletrica-air-fryer-mondial-pratic-af-34-32l-1200w-com-timer-152405250813.webp' },
      { id: 12, nome: 'Liquidificador', descricao: 'Alta potência para sucos e vitaminas.', preco: 'R$ 229,90', imagem: '/Imagens/liquidificador-britania-diamante-800-com-4-velocidades-e-jarra-26-litros-preto_5095.webp' },
      { id: 13, nome: 'Micro-ondas', descricao: 'Praticidade para o dia a dia.', preco: 'R$ 899,90', imagem: '/Imagens/1xg (1).avif' },
      { id: 14, nome: 'Cafeteira', descricao: 'Prepare cafés incríveis.', preco: 'R$ 349,90', imagem: '/Imagens/51jTHJQjhBL._AC_UF894,1000_QL80_.jpg' },
      { id: 15, nome: 'Panela de Pressão Elétrica', descricao: 'Cozimento rápido e seguro.', preco: 'R$ 599,90', imagem: '/Imagens/51429bjUOCL._AC_UF894,1000_QL80_.jpg' },
    ],
  },
];

function Home() {
  const { adicionarItem } = useCarrinho();
  const navigate = useNavigate();

  return (
    <Main>
      {categorias.map((categoria) => {
        const carouselRef = useRef<HTMLDivElement>(null);

        const scroll = (direction: 'left' | 'right') => {
          if (carouselRef.current) {
            const scrollAmount = 340;
            carouselRef.current.scrollBy({
              left: direction === 'left' ? -scrollAmount : scrollAmount,
              behavior: 'smooth',
            });
          }
        };

        return (
          <Section key={categoria.id}>
            <Title>{categoria.nome}</Title>
            <CarouselContainer>
              <LeftArrow onClick={() => scroll('left')}>&#10094;</LeftArrow>
              <Carousel ref={carouselRef}>
                {categoria.produtos.map((produto) => (
                  <Card key={produto.id}>
                    <Img src={produto.imagem} alt={produto.nome} />
                    <ProductName>{produto.nome}</ProductName>
                    <Description>{produto.descricao}</Description>
                    <Price>{produto.preco}</Price>
                    <AddButton onClick={() => adicionarItem(produto)}>
                      Adicionar ao Carrinho
                    </AddButton>
                    <BuyButton onClick={() => navigate('/finalizar', { state: { produto } })}>Comprar</BuyButton>
                  </Card>
                ))}
              </Carousel>
              <RightArrow onClick={() => scroll('right')}>&#10095;</RightArrow>
            </CarouselContainer>
          </Section>
        );
      })}
    </Main>
  );
}

export default Home;
