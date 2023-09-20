'use client';

import { useParams } from 'next/navigation';
import { Box, Typography, useTheme } from '@mui/material';

export default function Index(): JSX.Element {
  const { id } = useParams();
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: '0.5rem', marginLeft: '1rem' }}>
      <Typography
        component="h1"
        variant="h1"
        sx={{ color: theme.palette.text.primary }}
      >
        {id}
      </Typography>
    </Box>
  );
}
