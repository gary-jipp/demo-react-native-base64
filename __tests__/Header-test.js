import 'react-native';
import React from 'react';
import Header from 'Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Header Tests', () => {

  it('Renders and Matches snapshot', () => {
    const tree = renderer.create(<Header title="Application Header"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
