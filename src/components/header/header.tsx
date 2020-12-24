import React, { useContext } from 'react';

import { Context } from '../../context';

import './header.css'

const Header: React.FC = () => {

  const {
    loading,
    value,
    group,
    setGroup,
    deleteGiphs,
    loadGiph,
    changeValue
  } = useContext(Context);

  return (
    <header className="header">
      <input
        className="input"
        value={value}
        onChange={changeValue}
      />
      <button
        className="load-btn"
        onClick={() => loadGiph(value)}
        disabled={loading}
      >
        {loading ? 'загрузка!!' : 'загрузить'}
      </button>
      <button
        className="delete-btn"
        onClick={deleteGiphs}
      >
        Очистить
        </button>
      <button
        className="group-btn"
        onClick={() => setGroup(!group)}
      >
        {group ? 'Разгруппировать' : 'Группировать'}
      </button>
    </header>
  )
};

export default Header;