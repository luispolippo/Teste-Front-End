import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CheckIcon from '@mui/icons-material/Check';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header />
      <Form setOpen={setOpen} />
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          icon={<CheckIcon fontSize="inherit" />}
        >
          Cadastro realizado com sucesso!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
