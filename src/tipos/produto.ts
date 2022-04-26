// TIPOS
import { Pagamento } from './pagamento'

export interface Produto {
  nome: string;
  quantidade: string;
  valor: number;
  pagamento: Pagamento;
}

export const estadoInicialProduto = {
  nome: '',
  quantidade: '',
  valor: 0,
  pagamento: {
    id: 0,
    nome: 'Nenhum'
  }
}
