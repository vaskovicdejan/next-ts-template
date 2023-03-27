import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import { Inter } from "next/font/google";

const inter = Inter({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap',
});

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Box
        component="main"
        sx={{ width: '100%', color: '#333' }}
        className={styles.main}
      >
        <Box className={styles.description}>
          <Typography component="p">
            To get started, edit <code>pages/index.js</code> and save to reload.
          </Typography>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </Box>

        <Box className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <Box className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </Box>
        </Box>

        <Box className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography component="h2" className={inter.className}>
              Docs <span>-&gt;</span>
            </Typography>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography component="h2" className={inter.className}>
              Learn <span>-&gt;</span>
            </Typography>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography component="h2" className={inter.className}>
              Templates <span>-&gt;</span>
            </Typography>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography component="h2" className={inter.className}>
              Deploy <span>-&gt;</span>
            </Typography>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
