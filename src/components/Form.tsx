import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styled from 'styled-components';
import DateInputs from './DateInput';
import SelectInput from './SelectInput';
import { propertiesSelectMock, laboratoriesSelectMock } from '../data/dataMock';

const FormStyled = styled.form`
  padding: 1rem 1rem;
`;

function Form() {
  return (
    <FormStyled>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Nome"
            required
            variant="standard"
            fullWidth
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid item xs={3}>
            <DateInputs label="Data Inicial" />
          </Grid>
          <Grid item xs={3}>
            <DateInputs label="Data Final" />
          </Grid>
        </LocalizationProvider>
        <Grid item xs={6}>
          <SelectInput label="Propriedades" data={propertiesSelectMock} />
        </Grid>
        <Grid item xs={6}>
          <SelectInput label="Laboratório" data={laboratoriesSelectMock} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Observações"
            multiline
            rows={5}
            variant="standard"
            fullWidth
          />
        </Grid>
      </Grid>
    </FormStyled>
  );
}

export default Form;
