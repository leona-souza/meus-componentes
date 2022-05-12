// MUI
import {
  Card,
  Typography
} from '@mui/material'

// TYPES
import { Produto } from '../tipos/produto'

interface CardPromocaoProps {
  produto: Produto;
}

export const CardPromocao = (props: CardPromocaoProps): JSX.Element => {
  const { produto } = props

  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: 'red' }}
    >
      <Typography sx={{ fontSize: 32 }} color="white" gutterBottom>
        {produto.exclusivo && `EXCLUSIVO: `}{produto.nome}
      </Typography>
      <Typography sx={{ fontSize: 18 }} color="white" gutterBottom>
        {`R$ ${produto.valor}`}
      </Typography>
      <Typography sx={{ fontSize: 18 }} color="white">
        Pagamento: {produto.pagamento.nome}
      </Typography>
      {
        produto.pagamento.bandeira &&
        <Typography sx={{ fontSize: 18 }} color="white" gutterBottom>
          Bandeira: {produto.pagamento.bandeira.nome}
        </Typography>
      }
      {
        produto.promocao &&
        <Typography sx={{ fontSize: 18 }} color="red">
          PROMOÇÃO!
        </Typography>
      }
    </Card>
  )
}
