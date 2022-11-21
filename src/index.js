import React from 'react';
import ReactDOM from 'react-dom/client';
import {Menu} from './components/menu'
import { AssinarNewsletter } from './components/assinarNewsletter';
import {Background, GlobalStyle} from './styled.jsx'

import BackgroundBg from './images/bg.jpg';
import BackgroundLines from './images/Linhas.svg';
import BodyShape from './images/body-shape.svg';

const bgQuery ={'@media screen and (maxWidth: 900px)' :{visibility: 'hidden'}};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <GlobalStyle />
      <Background repeat={'repeat'} position={'center'} url={BackgroundBg}  />
      <Background repeat={'repeat'} position={'center'} url={BackgroundLines} />
      <Background repeat={'no-repeat'} position={'right top'} url={BodyShape} style={bgQuery} visibility={'hidden'}/>
      <Menu />
      <AssinarNewsletter />
    </React.StrictMode>
  
);
