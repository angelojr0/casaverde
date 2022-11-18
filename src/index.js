import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Menu} from './components/menu'
import { AssinarNewsletter } from './components/assinarNewsletter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <Menu />
      <AssinarNewsletter />
    </React.StrictMode>
  </>
);
