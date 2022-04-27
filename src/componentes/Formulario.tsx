// REACT
import {
  useState
} from 'react'

// ESTILOS
import * as Styled from './Formulario.styles'

// TIPOS
import {
  estadoInicialProduto,
  Produto
} from '../tipos/produto'
import {
  meiosDePagamento
} from '../tipos/pagamento'

// MUI
import {
  Button,
  Grid,
  TextField
} from '@mui/material'

// COMPONENTES
import { FormSelect } from './FormSelect'

export const Formulario = (): JSX.Element => {
  const [produto, setProduto] = useState<Produto>(estadoInicialProduto)
  const bandeirasDisponiveis =
    meiosDePagamento.find(meio => meio.id === 2)?.bandeira || []

  const atualizarProduto = (prop: string, valor: any): void => {
    setProduto(previous => {
      return {
        ...previous,
        [prop]: valor
      }
    })
  }

  const encontrarNome = (array: any[], id: number): string => {
    return array.filter(objeto => objeto.id === id)[0].nome
  }

  const atualizarPagamento = (novoPagamento: number): void => {
    atualizarProduto(
      'pagamento',
      {
        id: novoPagamento,
        nome: encontrarNome(meiosDePagamento, novoPagamento)
      }
    )
  }

  const atualizarBandeira = (novaBandeira: number): void => {
    atualizarProduto(
      'pagamento',
      {
        id: 2,
        nome: encontrarNome(meiosDePagamento, 2),
        bandeira: {
          id: novaBandeira,
          nome: encontrarNome(bandeirasDisponiveis, novaBandeira)
        }
      }
    )
  }

  return (
    <Styled.GridContainer
      container
      direction='column'
      spacing={2}
      style={{ width: '400px' }}
    >
      <Grid item xs={4}>
        <TextField
          label="Nome"
          onChange={e => atualizarProduto('nome', e.target.value)}
          value={produto.nome}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Quantidade"
          onChange={e => atualizarProduto('quantidade', e.target.value)}
          value={produto.quantidade}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Valor"
          onChange={e => atualizarProduto('valor', e.target.value)}
          value={produto.valor}
        />
      </Grid>

      <Grid item xs={2}>
        <FormSelect
          label="Opções de Pagamento"
          labelId="pagto"
          opcoes={meiosDePagamento}
          valor={produto.pagamento.id}
          onChange={(e) => atualizarPagamento(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        {
          produto.pagamento.id === 2 &&
          <FormSelect
            label="Bandeiras"
            labelId="bandeiras"
            opcoes={bandeirasDisponiveis}
            valor={produto.pagamento.bandeira?.id || 0}
            onChange={e => atualizarBandeira(e.target.value)}
          />
        }
      </Grid>

      <Styled.Buttons>
        <Button
          onClick={(): void => console.log(produto)}
          variant="outlined"
        >
          Cadastrar
        </Button>
      </Styled.Buttons>
    </Styled.GridContainer>
  )
}
