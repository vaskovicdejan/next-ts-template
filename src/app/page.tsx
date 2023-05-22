'use client';
import React, { useState, useMemo } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Image from 'next/image';

import MaterialReactTable from 'material-react-table';
import type { MRT_ColumnDef } from 'material-react-table';

import styles from './styles/Home.module.css';
import { Inter } from 'next/font/google';

interface Code {
  hashCode?: number;
  colorCode?: string;
}

const inter = Inter({
  weight: '400',
  subsets: ['latin-ext'],
  display: 'swap',
});

function range(start: number, end: number, step = 1): ReadonlyArray<number> {
  return Array.apply(0, Array(end)).map(
    (_element, index) => index * step + start,
  );
}

/**
 * Java の String#hashCode() 相当のハッシュ値を返します。
 * @param s 文字列
 * @returns ハッシュ値
 */
function hashCode(s: string) {
  return s.split('').reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}
/**
 * 文字列のハッシュ値からカラーコードを生成して返します。
 * @param string 文字列
 * @returns カラーコード
 */
function stringToColor(string: string) {
  const hash = hashCode(string);

  const color = range(0, 3)
    .map((i) => `00${((hash >> (i * 8)) & 0xff).toString(16)}`.slice(-2))
    .reduce((acc, cur) => `${acc}${cur}`);
  return `#${color}`;
}

export default function Home(): JSX.Element {
  const columns = useMemo<MRT_ColumnDef<Code>[]>(
    () => [
      {
        header: 'Hash Code',
        accessorKey: 'hashCode',
      },
      {
        header: 'Color Code',
        accessorKey: 'colorCode',
        Cell: ({
          row: {
            original: { colorCode },
          },
        }) => colorCode ?? <Box sx={{ color: colorCode }}>{colorCode}</Box>,
      },
    ],
    [],
  );

  const [data, setData] = useState<Code>({});
  return (
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
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
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
      <TextField
        placeholder="input text"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setData({
            hashCode: hashCode(event.target.value),
            colorCode: stringToColor(event.target.value),
          });
        }}
      />

      <MaterialReactTable
        columns={columns}
        data={[data]}
        enableColumnActions={false}
        enableColumnFilters={false}
        enablePagination={false}
        enableSorting={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        muiTableBodyRowProps={{ hover: false }}
      />
    </Box>
  );
}
