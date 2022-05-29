import 'react-native';
import React from 'react';
import Button from 'Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Button Tests', () => {

  it('Renders and Matches snapshot', () => {
    const tree = renderer.create(<Button title="Press Me" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
