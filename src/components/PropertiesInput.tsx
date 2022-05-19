import React from 'react';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Properties from '../interfaces/Properties';

type PropertiesInputProps = {
  data: Properties[],
  properties: string,
  setProperties: (newProperty: string) => void
};

function PropertiesInput(props: PropertiesInputProps) {
  const { data, properties, setProperties } = props;

  const showCNPJ = () => {
    if (properties) {
      const propertiesJson = JSON.parse(properties);
      return (
        <FormHelperText>{propertiesJson.cnpj}</FormHelperText>
      );
    }
    return false;
  };

  return (
    <>
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
      {
        showCNPJ()
      }
    </>
  );
}

export default PropertiesInput;
