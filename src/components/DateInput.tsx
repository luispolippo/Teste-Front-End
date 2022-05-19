/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

type DateInputsProps = {
  label: string;
};

function DateInputs(props: DateInputsProps) {
  const { label } = props;

  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (newDate: Date | null) => {
    setDate(newDate);
  };

  return (
    <DesktopDatePicker
      label={label}
      inputFormat="dd/MM/yyyy"
      value={date}
      onChange={handleDateChange}
      renderInput={(params) => <TextField {...params} required variant="standard" fullWidth />}
    />
  );
}

export default DateInputs;
