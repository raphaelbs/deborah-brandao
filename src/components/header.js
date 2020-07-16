import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const Header = ({ siteTitle }) => {
  const theme = useTheme();

  const headerStyle = {
    background: theme.palette.primary.dark,
    marginBottom: `1.45rem`,
  };

  return (
    <header style={headerStyle}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Typography variant="h1" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
