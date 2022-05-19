import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Properties from '../interfaces/Properties';

type PropertiesInputProps = {
  data: Properties[],
  properties: string,
  setProperties: (newProperty: string) => void
};

function PropertiesInput(props: PropertiesInputProps) {
  const { data, properties, setProperties } = props;
  return (
    <TextField
      select
      label="Propriedades"
      variant="standard"
      fullWidth
      value={properties}
      onChange={(e) => { setProperties(e.target.value); }}
      required
    >
      {
        data.map((property) => (
          <MenuItem key={property.id} value={JSON.stringify(property)}>
            {property.property}
          </MenuItem>
        ))
      }
    </TextField>
  );
}

export default PropertiesInput;
