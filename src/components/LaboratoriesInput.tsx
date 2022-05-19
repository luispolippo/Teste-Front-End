import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Laboratories from '../interfaces/Laboratories';

type LaboratoriesInputProps = {
  data: Laboratories[],
  laboratories: string,
  setLaboratories: (newLaboratory: string) => void
};

function LaboratoriesInput(props: LaboratoriesInputProps) {
  const { data, laboratories, setLaboratories } = props;
  return (
    <TextField
      select
      label="Laboratórios"
      variant="standard"
      fullWidth
      value={laboratories}
      onChange={(e) => { setLaboratories(e.target.value); }}
      required
    >
      {
        data.map((laboratory) => (
          <MenuItem key={laboratory.id} value={JSON.stringify(laboratory)}>
            {laboratory.laboratory}
          </MenuItem>
        ))
      }
    </TextField>
  );
}

export default LaboratoriesInput;
