/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import styled from 'styled-components';

const FormStyled = styled.form`
  padding: 1rem 1rem;
`;

function Form() {
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
  };

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
            <DesktopDatePicker
              label="Data Inicial"
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} required variant="standard" fullWidth />}
            />
          </Grid>
          <Grid item xs={3}>
            <DesktopDatePicker
              label="Data Final"
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} required variant="standard" fullWidth />}
            />
          </Grid>
        </LocalizationProvider>
      </Grid>
    </FormStyled>
  );
}

export default Form;
