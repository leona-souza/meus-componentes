// MUI
import {
  Card,
  Typography
} from '@mui/material'

// TYPES
import { Produto } from '../tipos/produto'

interface CardComumProps {
  produto: Produto;
}

export const CardComum = (props: CardComumProps): JSX.Element => {
  const { produto } = props

  return (
    <Card variant="outlined">
      <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
        {produto.nome}
      </Typography>
      <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
        {`R$ ${produto.valor}`}
      </Typography>
      <Typography sx={{ fontSize: 18 }} color="text.secondary">
        Pagamento: {produto.pagamento.nome}
      </Typography>
      {
        produto.pagamento.bandeira &&
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Bandeira: {produto.pagamento.bandeira.nome}
        </Typography>
      }
    </Card>
  )
}
