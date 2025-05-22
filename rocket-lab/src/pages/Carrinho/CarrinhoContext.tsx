import { createContext, type ReactNode, useContext, useState } from 'react';

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
};

type CarrinhoContextType = {
  itens: Produto[];
  adicionarItem: (produto: Produto) => void;
  removerItem: (id: number) => void;
};

const CarrinhoContext = createContext({} as CarrinhoContextType);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [itens, setItens] = useState<Produto[]>([]);

  function adicionarItem(produto: Produto) {
    setItens((prev) => [...prev, produto]);
  }

  function removerItem(id: number) {
    setItens((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}
