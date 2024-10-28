import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Screen02 from './App'; // Adjust based on the path

export default function App() {
  return (
    <Provider store={store}>
      <Screen02 />
    </Provider>
  );
}
