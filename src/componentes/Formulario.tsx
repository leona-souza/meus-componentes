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

  const atualizarProduto = (prop: string, valor: any): void => {
    setProduto(previous => {
      return {
        ...previous,
        [prop]: valor
      }
    })
  }

  useEffect(() => console.log(produto), [produto])

  return (
    <Grid container spacing={2}>
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

      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel id="pagto">Opções de Pagamento</InputLabel>
          <Select
            labelId="pagto"
            value={1}
            label="Opções de Pagamento"
            onChange={e => console.log(e)}
          >
            <MenuItem value={1}>Ten</MenuItem>
            <MenuItem value={2}>Twenty</MenuItem>
            <MenuItem value={3}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}></Grid>

      <Styled.Buttons>
        <Button variant="outlined">Enviar</Button>
      </Styled.Buttons>
    </Grid>
  )
}
