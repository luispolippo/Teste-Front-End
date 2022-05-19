import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Properties from '../interfaces/Properties';

type SelectInputProps = {
  label: string,
  data: Properties[] | string[],
  selectValue: Properties | string,
  setSelectValue: (newProperty: Properties | string) => void,
};

function SelectInput(props: SelectInputProps) {
  const {
    label, data, selectValue, setSelectValue,
  } = props;
  return (
    <TextField
      select
      label={label}
      variant="standard"
      fullWidth
      required
      value={selectValue}
      onChange={(e) => { setSelectValue(e.target.value); }}
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
