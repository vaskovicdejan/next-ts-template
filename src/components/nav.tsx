import React from 'react';
import Link from 'next/link';
import { Box, List, ListItem } from '@mui/material';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}));

const Nav = (): JSX.Element => (
  <Box>
    <List>
      <ListItem>
        <Link href="/">
          <a>Home</a>
        </Link>
      </ListItem>
      {links.map(({ key, href, label }) => (
        <ListItem key={key}>
          <a href={href}>{label}</a>
        </ListItem>
      ))}
    </List>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </Box>
);

export default Nav;
