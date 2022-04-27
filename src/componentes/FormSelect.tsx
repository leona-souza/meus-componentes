// MUI
import {
  InputLabel,
  FormControl,
  MenuItem,
  Select
} from '@mui/material'

interface Opcoes {
  id: number;
  nome: string;
}

interface FormSelectProps {
  label: string;
  labelId?: string;
  onChange: (e: any) => void;
  opcoes: Opcoes[];
  valor: string | number;
}

export const FormSelect = ({
  label,
  labelId,
  onChange,
  opcoes,
  valor
}: FormSelectProps): JSX.Element => {
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        value={valor}
        label={label}
        onChange={e => onChange(e)}
      >
        {
          opcoes.map(opcao => (
            <MenuItem
              key={opcao.id}
              value={opcao.id}
            >
              {opcao.nome}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}
