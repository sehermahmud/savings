import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function ButtonAppBar() {
  const headerLinks = [
    { label: 'Savings', href: '/savings' },
    { label: 'SeherSavings', href: '/sehersavings' },
    { label: 'SafinSavings', href: '/safinsavings' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <Link
          style={{
            color: 'white',
            textTransform: 'none',
            textDecoration: 'none',
          }}
          to={href}
          key={href}
        >
          <Button
            style={{
              color: 'white',
              textTransform: 'none',
              textDecoration: 'none',
              fontSize: '1.2em',
              fontWeight: '1em',
            }}
            color="inherit"
          >
            {label}
          </Button>
        </Link>
      );
    });

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar
        style={{
          background: '#1de9b6',
        }}
      >
        <Toolbar>
          <Typography
            style={{
              flexGrow: 1,
              fontSize: '1.5em',
              fontWeight: '1em',
              color: 'white',
            }}
          >
            <Link
              style={{
                textTransform: 'none',
                color: 'white',
                textDecoration: 'none',
              }}
              to="/"
            >
              Home
            </Link>
          </Typography>
          {headerLinks}
        </Toolbar>
      </AppBar>
    </div>
  );
}
