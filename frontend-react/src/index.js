import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles'

ReactDOM.render(
  <div>
    <StyledEngineProvider injectFirst>
    <App/>
    </StyledEngineProvider>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
