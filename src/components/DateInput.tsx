/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

type DateInputsProps = {
  label: string,
  date: Date | string | null,
  setDate: (newDate: Date | string | null) => void
};

function DateInputs(props: DateInputsProps) {
  const { label, date, setDate } = props;

  const convertDate = (longDate: Date | null): string | null => {
    if (longDate) return longDate.toISOString();
    return null;
  };

  return (
    <DesktopDatePicker
      label={label}
      value={date}
      onChange={(newDate: Date | null) => {
        const convertedDate = convertDate(newDate);
        setDate(convertedDate);
      }}
      inputFormat="dd/MM/yyyy"
      renderInput={(params) => <TextField {...params} required variant="standard" fullWidth />}
    />
  );
}

export default DateInputs;
