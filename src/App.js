import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

export default function BasicButtons() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(true);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          onClick={handleButtonClick}
          sx={{
            width: '336px',
            height: '74px',
            borderRadius: '10px',
            border: isActive ? '1.5px solid #5850EC' : '1px solid #e4e4e4',
            textTransform: 'none',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#3d3d3d',
            '&:hover': {
              backgroundColor: 'rgba(117, 117, 117, 0.06)',
              border: isActive ? '1.5px solid #5850EC' : '1.5px solid #bdbdbd',
            },
          }}
        >
          Why are you gay?
        </Button>
      </Stack>
    </Box>
  );
}
