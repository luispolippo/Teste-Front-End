import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

type SelectInputProps = {
  label: string
};

function SelectInput(props: SelectInputProps) {
  const { label } = props;
  return (
    <FormControl fullWidth required>
      <InputLabel>{label}</InputLabel>
      <Select label="Propriedades" variant="standard">
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectInput;
