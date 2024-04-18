import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ id, label, variant, style }) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 4, width: style },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        label={label}
        variant={variant}
        multiline
        rows={4}
      />
    </Box>
  );
}
