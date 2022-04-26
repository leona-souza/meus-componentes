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
  FormControl,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  TextField
} from '@mui/material'

export const Formulario = (): JSX.Element => {
  const [produto, setProduto] = useState<Produto>(estadoInicialProduto)
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
                >{band.nome}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
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
