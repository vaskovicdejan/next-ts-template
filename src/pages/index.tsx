import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Layout from '../components/Layout';

const StyledBox = styled(Box)(() => ({
  maxWidth: '880px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '80px auto 40px',
  textDecoration: 'none',
}));

const CardStyleLink = styled(Link)(() => ({
  padding: '18px 18px 24px',
  width: '220px',
  textAlign: 'left',
  color: '#434343',
  border: '1px solid #9b9b9b',
  textDecoration: 'none',
  '&:hover, &.Mui-focusVisible, &.Mui-active': {
    borderColor: '#067df7',
  },
  '& h3': {
    margin: '0',
    color: '#067df7',
    fontSize: '18px',
  },
  '& p': {
    margin: '0',
    padding: '12px 0 0',
    color: '#333',
    fontSize: '13px',
  },
}));

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Box component='main' sx={{ width: '100%', color: '#333' }}>
        <Box sx={{
          margin: '0',
          width: '100%',
          paddingTop: '80px',
          lineHeight: '1.15',
        }}>
          <Typography
            component='h1'
            align='center'
            fontSize='48px'
          >
          Welcome to Next.js!
          </Typography>
        </Box>
        <Typography align='center'>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </Typography>

        <StyledBox>
          <CardStyleLink href="https://nextjs.org/docs">
            <Typography component='h3'>Documentation &rarr;</Typography>
            <Typography component='p'>Learn more about Next.js in the documentation.</Typography>
          </CardStyleLink>
          <CardStyleLink href="https://nextjs.org/learn" className="card">
            <Typography  component='h3'>Next.js Learn &rarr;</Typography>
            <Typography  component='p'>Learn about Next.js by following an interactive tutorial!</Typography>
          </CardStyleLink>
          <CardStyleLink href="https://github.com/zeit/next.js/tree/master/examples" className="card">
            <Typography  component='h3'>Examples &rarr;</Typography>
            <Typography  component='p'>Find other example boilerplates on the Next.js GitHub.</Typography>
          </CardStyleLink>
        </StyledBox>
      </Box>
    </Layout>
  );
};

export default Home;
