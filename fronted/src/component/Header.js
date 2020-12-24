import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ background: '#1de9b6' }}
    >
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
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <span class="navbar-text">{headerLinks}</span>
      </div>
    </nav>
  );
}
