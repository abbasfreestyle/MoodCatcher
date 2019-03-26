import React from 'react';

import { Provider } from 'react-redux';

import store from 'config/redux';
import AppWithNavState from 'config/navigation';

const App = () => (
  <Provider store={store}>
    <AppWithNavState />
  </Provider>
);

export default App;
