// TIPOS
import { Pagamento } from './pagamento'

export interface Produto {
  exclusivo: boolean;
  nome: string;
  promocao: boolean;
  quantidade: string;
  valor: number;
  pagamento: Pagamento;
}

export const estadoInicialProduto: Produto = {
  exclusivo: false,
  nome: '',
  promocao: false,
  quantidade: '',
  valor: 0,
  pagamento: {
    id: 0,
    nome: 'Nenhum'
  }
}
