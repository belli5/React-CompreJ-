import { createContext, type ReactNode, useContext, useState } from 'react';

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
};

type ProdutoCarrinho = Produto & { quantidade: number };

type CarrinhoContextType = {
  itens: ProdutoCarrinho[];
  adicionarItem: (produto: Produto) => void;
  removerItem: (id: number) => void;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
};

const CarrinhoContext = createContext({} as CarrinhoContextType);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<ProdutoCarrinho[]>([]);

  function adicionarItem(produto: Produto) {
    setItens((prev) => {
      const existente = prev.find((item) => item.id === produto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }

  function removerItem(id: number) {
    setItens((prev) => prev.filter((item) => item.id !== id));
  }

  function aumentarQuantidade(id: number) {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  }

  function diminuirQuantidade(id: number) {
    setItens((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        aumentarQuantidade,
        diminuirQuantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
