require('styles/main.scss');

import vendor from 'vendor/vendor';
import { render } from 'react-dom';
import React from 'react';
import App from 'components';

render(
  <App />,
  document.getElementById('root')
);
