import React, { useContext } from 'react';
import { Context } from '../../context/context';

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
    <header>
      <input
        value={value}
        onChange={changeValue}
      />
      <button
        onClick={() => loadGiph(value)}
        disabled={loading}
      >
        {loading ? 'загрузка...' : 'загрузить'}
      </button>
      <button
        onClick={deleteGiphs}
      >
        Очистить
        </button>
      <button
        onClick={() => setGroup(!group)}
      >
        {group ? 'Разгруппировать' : 'Группировать'}
      </button>
    </header>
  )
};

export default Header;