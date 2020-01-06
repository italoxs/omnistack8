import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecongnized WebSocket',
  'Unhandled Promise Rejection'
]);

import Routes from './routes'


export default function App() {
  return (
    <Routes />
  );
};




