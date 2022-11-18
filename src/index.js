import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Menu} from './components/menu'
import bodyShape from './images/body-shape.svg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <div id='backgroundDiv'><div id='backgroundImage'></div></div>
      <Menu />
    </React.StrictMode>
  </>
);
