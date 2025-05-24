import { createContext, useContext, useEffect, useState } from 'react';

export type ProdutoCarrinho = {
  id: number;
  nome: string;
  descricao?: string;
  preco: string; // formato "R$ 249,90"
  quantidade: number;
  imagem?: string;
};

type CarrinhoContextType = {
  itens: ProdutoCarrinho[];
  adicionarItem: (item: ProdutoCarrinho) => void;
  removerItem: (id: number) => void;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  limparCarrinho: () => void;
};

const CarrinhoContext = createContext<CarrinhoContextType>({} as CarrinhoContextType);

export const CarrinhoProvider = ({ children }: { children: React.ReactNode }) => {
  const [itens, setItens] = useState<ProdutoCarrinho[]>([]);

  // ✅ Carregar carrinho do localStorage ao iniciar
  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      setItens(JSON.parse(carrinhoSalvo));
    }
  }, []);

  // ✅ Salvar carrinho no localStorage sempre que itens mudam
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(itens));
  }, [itens]);

  const adicionarItem = (item: ProdutoCarrinho) => {
    const existente = itens.find((i) => i.id === item.id);

    if (existente) {
      setItens(itens.map((i) =>
        i.id === item.id ? { ...i, quantidade: i.quantidade + 1 } : i
      ));
    } else {
      setItens([...itens, { ...item, quantidade: 1 }]);
    }
  };

  const removerItem = (id: number) => {
    setItens(itens.filter((item) => item.id !== id));
  };

  const aumentarQuantidade = (id: number) => {
    setItens(itens.map((item) =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    ));
  };

  const diminuirQuantidade = (id: number) => {
    setItens(itens.map((item) => {
      if (item.id === id) {
        return { ...item, quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1 };
      }
      return item;
    }));
  };

  const limparCarrinho = () => {
    setItens([]);
    localStorage.removeItem('carrinho');
  };

  return (
    <CarrinhoContext.Provider
      value={{ itens, adicionarItem, removerItem, aumentarQuantidade, diminuirQuantidade, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);
