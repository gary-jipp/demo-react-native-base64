import 'react-native';
import React from 'react';
import App from 'App';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('App Tests', () => {

  it('Renders without crashing', () => {
    const tree = renderer.create(<App />).toJSON();
  });

});
