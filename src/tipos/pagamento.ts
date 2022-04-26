export interface Pagamento {
  id: number;
  nome: string;
  bandeira?: Bandeira;
}

export interface Bandeira {
  id: number;
  nome: string;
}

export const estadoInicialBandeira: Bandeira = {
  id: 1,
  nome: 'Bandeira A'
}

export const meiosDePagamento = [
  {
    id: 0,
    nome: 'Nenhum'
  }, {
    id: 1,
    nome: 'Boleto'
  }, {
    id: 2,
    nome: 'Cartão de Crédito',
    bandeira: [
      {
        id: 0,
        nome: 'Nenhuma'
      }, {
        id: 1,
        nome: 'Bandeira A'
      }, {
        id: 2,
        nome: 'Bandeira B'
      }, {
        id: 3,
        nome: 'Bandeira C'
      }, {
        id: 4,
        nome: 'Bandeira D'
      }, {
        id: 5,
        nome: 'Bandeira E'
      }
    ]
  }, {
    id: 3,
    nome: 'PIX'
  }
]
