'use client';

import { Box, Typography, useTheme } from '@mui/material';

export default function Index({
  params: { id },
}: {
  params: { id: string };
}): JSX.Element {
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
