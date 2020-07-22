import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Home from '../components/sections/Home';
import Portfolio from '../components/sections/Portfolio';

const IndexPage = () => (
  <Layout>
    <SEO title="Deborah Brandão" />
    {/* TODO: <Menu /> */}
    <Home />
    <Portfolio />
    {/*
      TODO: <Contact />
      */}
  </Layout>
);

export default IndexPage;
