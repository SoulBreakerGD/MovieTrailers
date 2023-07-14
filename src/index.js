import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import M from 'materialize-css'
import '@mui/material/styles'
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/Theme/ThemeContext';
import { AuthContextProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //     <ThemeProvider>
  //         <App/>
  //     </ThemeProvider>
  // </React.StrictMode>
  <BrowserRouter>
    <ThemeProvider>
      <AuthContextProvider>
        <App/>
      </AuthContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
