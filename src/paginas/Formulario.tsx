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
import { meiosDePagamento } from '../tipos/pagamento'

// MUI
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  Switch,
  TextField
} from '@mui/material'

// COMPONENTES
import { CardComum } from '../componentes/CardComum'
import { CardPromocao } from '../componentes/CardPromocao'

export const Formulario = (): JSX.Element => {
  const [produto, setProduto] = useState<Produto>(estadoInicialProduto)
  const [produtoCard, setProdutoCard] = useState<Produto | undefined>(undefined)
  const bandeirasDisponiveis =
    meiosDePagamento.find(meio => meio.id === 2)?.bandeira

  const atualizarProduto = (prop: string, valor: any): void => {
    setProduto(previous => {
      return {
        ...previous,
        [prop]: valor
      }
    })
  }

  const atualizarSwitch = (chave: string, valor: boolean): void => {
    atualizarProduto(chave, !produto[chave as keyof Produto])
  }

  return (
    <Styled.GridContainer
      container
      direction='column'
      spacing={2}
      style={{ width: '400px' }}
    >
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Nome"
            onChange={e => atualizarProduto('nome', e.target.value)}
            value={produto.nome}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Quantidade"
            onChange={e => atualizarProduto('quantidade', e.target.value)}
            value={produto.quantidade}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Valor"
            onChange={e => atualizarProduto('valor', e.target.value)}
            value={produto.valor}
          />
        </FormControl>
      </Grid>

      <Grid item xs={2}>
        <FormControl fullWidth>
          <InputLabel id="pagto">Opções de Pagamento</InputLabel>
          <Select
            labelId="pagto"
            value={produto.pagamento.id}
            label="Opções de Pagamento"
            onChange={e => atualizarProduto(
              'pagamento',
              {
                id: e.target.value,
                nome: meiosDePagamento
                  .filter(meio => meio.id === e.target.value)[0].nome
              }
            )}
          >
            {
              meiosDePagamento.map(meio => (
                <MenuItem
                  key={meio.id}
                  value={meio.id}
                >
                  {meio.nome}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        {
          produto.pagamento.id === 2 &&
          <FormControl fullWidth>
            <InputLabel id="bandeiras">Bandeiras</InputLabel>
            <Select
              labelId="bandeiras"
              value={produto.pagamento.bandeira?.id || 0}
              label="Opções de Pagamento"
              onChange={e => atualizarProduto(
                'pagamento',
                {
                  id: 2,
                  nome: meiosDePagamento
                    .filter(meio => meio.id === 2)[0].nome,
                  bandeira: {
                    id: e.target.value,
                    nome: bandeirasDisponiveis?.filter(
                      bandeira => bandeira.id === e.target.value
                    )[0].nome
                  }
                }
              )}
            >
              {
                bandeirasDisponiveis?.map(band => (
                  <MenuItem
                    key={band.id}
                    value={band.id}
                  >
                    {band.nome}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        }
      </Grid>

      <Grid item xs={2}>
        <FormControl>
          <FormControlLabel
            control={<Switch />}
            label="Exclusivo"
            onChange={() => atualizarSwitch('exclusivo', !produto.exclusivo)}
          />
          <FormControlLabel
            control={<Switch />}
            label="Promoção"
            onChange={() => atualizarSwitch('promocao', !produto.promocao)}
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
        produtoCard && !produtoCard.exclusivo && !produtoCard.promocao &&
        <CardComum produto={produtoCard} />
      }
      {
        produtoCard && (produtoCard.exclusivo || produtoCard.promocao) &&
        <CardPromocao produto={produtoCard} />
      }
    </Styled.GridContainer>
  )
}
