// MUI
import {
  FormControlLabel,
  Switch
} from '@mui/material'

interface Props {
  label: string;
  onChange: () => void;
}

export const FormSwitch = (props: Props): JSX.Element => {
  const {
    label,
    onChange
  } = props

  return (
    <FormControlLabel
      control={<Switch />}
      label={label}
      onChange={onChange}
    />
  )
}
