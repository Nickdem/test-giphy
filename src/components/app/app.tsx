import React from 'react';

import Header from '../header';
import ImgList from '../img-list';
import { State } from '../../context';

import './app.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <State>
        <Header />
        <ImgList />
      </State>
    </div>
  );
}

export default App;
