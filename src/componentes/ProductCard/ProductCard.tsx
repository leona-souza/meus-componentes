// MUI
import {
  Card,
  Typography
} from '@mui/material'

// TYPES
import { Produto } from '../../tipos/produto'

interface ProductCardProps {
  produto: Produto;
}

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { produto } = props
  const fontSize = produto.exclusivo ? 32 : 24
  return (
    <Card variant="outlined">
      <Typography sx={{ fontSize }} color="text.primary" gutterBottom>
        {produto.exclusivo && `EXCLUSIVO: `}{produto.nome}
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
      {
        produto.promocao &&
        <Typography sx={{ fontSize: 18 }} color="red">
          PROMOÇÃO!!!
        </Typography>
      }
    </Card>
  )
}
