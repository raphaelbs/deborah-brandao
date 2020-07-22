import React from 'react';
import renderer from 'react-test-renderer';

import useMediaQuery from '@material-ui/core/useMediaQuery';

jest.mock('@material-ui/core/useMediaQuery');

jest.mock('gatsby', () => ({
  graphql: jest.fn(() => ({
    placeholderImage: {
      childImageSharp: {
        fluid: 'image-source',
      },
    },
  })),
  useStaticQuery: jest.fn(param => param),
}));

import Home from '../index';

describe('Test home section', () => {
  it('should return the mobile html', () => {
    useMediaQuery.mockReturnValue(false);

    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return the desktop html', () => {
    useMediaQuery.mockReturnValue(true);

    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
