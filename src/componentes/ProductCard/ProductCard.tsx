// MUI
import {
  Card,
  Typography
} from '@mui/material'

// TYPES
import { Produto } from '../../tipos/produto'

interface ProductCardProps {
  corFonte?: string;
  corFundo?: string;
  produto: Produto;
  tamanhoTitulo?: number;
}

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const {
    corFonte,
    corFundo,
    produto,
    tamanhoTitulo
  } = props

  const corTitulo = corFonte || 'text.primary'
  const corTexto = corFonte || 'text.secondary'

  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: corFundo }}
    >
      <Typography sx={{ fontSize: tamanhoTitulo }} color={corTitulo} gutterBottom>
        {produto.exclusivo && `EXCLUSIVO: `}{produto.nome}
      </Typography>
      <Typography sx={{ fontSize: 18 }} color={corTexto} gutterBottom>
        {`R$ ${produto.valor}`}
      </Typography>
      <Typography sx={{ fontSize: 18 }} color={corTexto}>
        Pagamento: {produto.pagamento.nome}
      </Typography>
      {
        produto.pagamento.bandeira &&
        <Typography sx={{ fontSize: 18 }} color={corTexto} gutterBottom>
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
