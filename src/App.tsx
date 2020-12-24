import React from 'react';
import Header from './components/header/header';
import ImgList from './components/img-list/img-list';
import { State } from './context/state';

const App: React.FC = () => {
  return (
    <div className="App">
      <State>
        <Header />
        <ImgList />
      </State>
    </div>
  );
}

export default App;
