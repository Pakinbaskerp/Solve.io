// SimplePaper.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BasicTextFields from './text'; 
import BasicSelect from './dropdown';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '95vh', 
        padding: '20px', 
      }}
    >
      <Paper elevation={24} sx={{ width: '100%', height: 800 }}> 
        <div className="row">
          <div className="col-md-12 col-sm-12"> {/* Adjust column size for mobile responsiveness */}
            <BasicTextFields id="outlined-basic" label="Enter the Question" variant="outlined" style={{ width: '90%' }} />
          </div>
          <div className="col-md-4 col-sm-12"> {/* Adjust column size for mobile responsiveness */}
            <BasicTextFields id="outlined-basic-2" label="Sample input 1" variant="outlined" style={{ width: '60%' }} />
          </div>
          <div className="col-md-4 col-sm-12"> {/* Adjust column size for mobile responsiveness */}
            <BasicTextFields id="outlined-basic-3" label="Sample output 1" variant="outlined" style={{ width: '60%' }} />
          </div>
          <div className="col-md-2 p-5 col-sm-12"> {/* Adjust column size for mobile responsiveness */}
            <BasicSelect />
          </div>
        </div>
      </Paper>
    </Box>
  );
}
