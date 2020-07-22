import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/sections/Home';

const IndexPage = () => (
  <Layout>
    <SEO title="Deborah Brandão" />
    {/* TODO: <Menu /> */}
    <Home />
    {/*
      TODO: <Portfolio />
      TODO: <Contact />
      */}
  </Layout>
);

export default IndexPage;
