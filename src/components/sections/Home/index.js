import React from 'react';
import { Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core';

import Image from './Image';

function Home() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const nameHeight = '140px';
  const imageHeight = `calc(100% - ${nameHeight})`;

  const nameStyles = {
    maxHeight: isDesktop ? 'inherit' : nameHeight,
    height: isDesktop ? '100%' : 'auto',
  };
  const nameAlign = isDesktop ? 'center' : 'left';

  const imageStyles = {
    height: isDesktop ? '100%' : imageHeight,
    border: '1px solid grey',
    padding: 0,
  };

  return (
    <Grid container spacing={0} className="viewport">
      <Grid
        item
        container
        xs={12}
        md={4}
        style={nameStyles}
        alignContent="center"
      >
        <Typography variant="h1" align={nameAlign}>
          Deborah Brandão
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} style={imageStyles}>
        <Image />
      </Grid>
    </Grid>
  );
}

export default Home;
