// REACT
import {
  useState,
  useEffect
} from 'react'

// ESTILOS
import * as Styled from './Formulario.styles'

// TIPOS
import {
  estadoInicialProduto,
  Produto
} from '../tipos/produto'
import { meiosDePagamento } from '../tipos/pagamento'

// MUI
import {
  Button,
  FormControl,
  Grid,
  TextField
} from '@mui/material'

// COMPONENTES
import { FormSelect } from '../componentes/FormSelect/FormSelect'
import { FormSwitch } from '../componentes/FormSwitch/FormSwitch'
import { ProductCard } from '../componentes/ProductCard/ProductCard'

export const Formulario = (): JSX.Element => {
  const [produto, setProduto] = useState<Produto>(estadoInicialProduto)
  const [produtoCard, setProdutoCard] = useState<Produto | undefined>(undefined)
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

  const atualizarSwitch = (chave: string): void => {
    atualizarProduto(chave, !produto[chave as keyof Produto])
  }

  return (
    <Styled.GridContainer
      container
      direction='column'
      spacing={2}
      style={{ width: '500px' }}
    >
      <Grid item xs={4}>
        <FormControl fullWidth>
          <TextField
            label="Nome"
            onChange={e => atualizarProduto('nome', e.target.value)}
            value={produto.nome}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <TextField
            label="Quantidade"
            onChange={e => atualizarProduto('quantidade', e.target.value)}
            value={produto.quantidade}
          />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <TextField
            label="Valor"
            onChange={e => atualizarProduto('valor', e.target.value)}
            value={produto.valor}
          />
        </FormControl>
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

      <Grid item xs={2}>
        <FormControl>
          <FormSwitch
            label="Exclusivo"
            onChange={() => atualizarSwitch('exclusivo')}
          />
          <FormSwitch
            label="Promoção"
            onChange={() => atualizarSwitch('promocao')}
          />
        </FormControl>
      </Grid>

      <Styled.Buttons>
        <Button
          onClick={(): void => setProdutoCard(produto)}
          variant="outlined"
        >
          Cadastrar
        </Button>
        <Button
          onClick={(): void => setProdutoCard(undefined)}
          variant="contained"
        >
          Excluir
        </Button>
      </Styled.Buttons>

      {
        produtoCard &&
        <ProductCard
          corFonte="white"
          corFundo="red"
          tamanhoTitulo={26}
          produto={produtoCard}
        />
      }
    </Styled.GridContainer>
  )
}
