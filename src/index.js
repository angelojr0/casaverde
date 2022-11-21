import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Menu} from './components/menu'
import { AssinarNewsletter } from './components/assinarNewsletter';
import {GlobalStyle} from './styled.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <React.StrictMode>
      <GlobalStyle />
      <div id='bg1'></div>
      <div id='bg2'></div>
      <div id='bg3'></div>
      <Menu />
      <AssinarNewsletter />
    </React.StrictMode>
  
);
