/* eslint-disable react/jsx-props-no-spreading */
import React, { FormEvent, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import styled from 'styled-components';
import DateInputs from './DateInput';
import PropertiesInput from './PropertiesInput';
import Properties from '../interfaces/Properties';
import { propertiesSelectMock, laboratoriesSelectMock } from '../data/dataMock';
import LaboratoriesInput from './LaboratoriesInput';

const FormStyled = styled.form`
  padding: 1rem 1rem;
`;

const HelperTextStyled = styled(FormHelperText)`
  && {
    display: flex;
    justify-content: end;
  }
`;

function Form() {
  const [name, setName] = useState<string>('');
  const [initialDate, setInitialDate] = useState<Date | string | null>(null);
  const [finalDate, setFinalDate] = useState<Date | string | null>(null);
  const [observation, setObservation] = useState<string>('');
  const [properties, setProperties] = useState<string>('');
  const [laboratories, setLaboratories] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = {
      nome: name,
      dataInicial: initialDate,
      dataFinal: finalDate,
      observacoes: observation,
    };
    console.log(JSON.stringify(data));
  };

  /* ${name.length}/40 */

  return (
    <FormStyled id="form" onSubmit={(e) => handleSubmit(e)}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Nome"
            required
            variant="standard"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <HelperTextStyled>{`${JSON.stringify(properties)}`}</HelperTextStyled>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid item xs={3}>
            <DateInputs label="Data Inicial" date={initialDate} setDate={setInitialDate} />
          </Grid>
          <Grid item xs={3}>
            <DateInputs label="Data Final" date={finalDate} setDate={setFinalDate} />
          </Grid>
        </LocalizationProvider>
        <Grid item xs={6}>
          <PropertiesInput
            data={propertiesSelectMock}
            properties={properties}
            setProperties={setProperties}
          />
        </Grid>
        <Grid item xs={6}>
          <LaboratoriesInput
            data={laboratoriesSelectMock}
            laboratories={laboratories}
            setLaboratories={setLaboratories}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Observações"
            multiline
            rows={5}
            variant="standard"
            value={observation}
            onChange={(e) => { setObservation(e.target.value); }}
            fullWidth
          />
          <HelperTextStyled>{`${observation.length}/1000`}</HelperTextStyled>
        </Grid>
      </Grid>
    </FormStyled>
  );
}

export default Form;
