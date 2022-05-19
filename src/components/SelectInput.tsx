import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { PropertiesSelect } from '../data/dataMock';

type SelectInputProps = {
  label: string
  data: PropertiesSelect[] | string[]
};

function SelectInput(props: SelectInputProps) {
  const { label, data } = props;
  return (
    <TextField
      select
      label={label}
      variant="standard"
      fullWidth
      required
    >
      {
        data.map((value) => {
          if (typeof value === 'string') {
            return <MenuItem key={value} value={value}>{value}</MenuItem>;
          }
          return (
            <MenuItem key={value.cnpj} value={value.property}>
              {value.property}
            </MenuItem>
          );
        })
      }
    </TextField>
  );
}

export default SelectInput;
