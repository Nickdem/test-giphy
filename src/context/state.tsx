import React, { useReducer } from 'react';
import { iState, Item } from '../interfaces';
import { Context } from './context';
import { reducer } from './reducer';

export const State: React.FC = ({ children }) => {

  const _apiBase = 'https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=';

  const initialState: iState = {
    value: '',
    arr: [],
    loading: false,
    group: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setValue = (str: string) => {
    dispatch({
      type: 'SET_VALUE',
      payload: str
    });
  };

  const setLoading = (bool: boolean) => {
    dispatch({
      type: 'LOAD',
      payload: bool
    });
  };

  const setGroup = (bool: boolean) => {
    dispatch({
      type: 'GROUP',
      payload: bool
    });
  };

  const deleteArr = () => {
    dispatch({
      type: 'DELETE'
    });
  };

  const updateArr = (item: Item) => {

    const check = item.url.filter((u: string) => {
      return u === undefined
    });

    if (check.length) {
      setLoading(false);
      alert('ничего нет');
      return
    } else {
      dispatch({
        type: 'GET_BY_TAG',
        payload: item
      });
    }
  };

  const deleteGiphs = () => {
    setValue('');
    deleteArr();
  };

  const getByHashtag = (tag: string) => {
    const arr = tag.split(',');

    if (arr.length >= 2) {
      let urls: string[] = []

      arr.map((idx: string) => fetch(`${_apiBase}${idx}`)
        .then(res => res.json())
        .then(data => { urls.push(data.data.image_url); urls.length >= 2 && updateArr({ name: arr.join(','), url: urls }) })
        .catch(e => { alert('ошибка запроса'); console.error(e); setLoading(false) })
      )
    } else {
      const id = arr.join('');
      fetch(`${_apiBase}${id}`)
        .then(res => res.json())
        .then(data => updateArr({ name: id, url: [data.data.image_url] }))
        .catch(e => { alert('ошибка запроса'); console.error(e); setLoading(false) })
    }
  }

  const loadGiph = (value: string) => {
    setLoading(true);
    if (value === '') {
      alert('Поле не должно быть пустым');
      setLoading(false);
      return
    }
    getByHashtag(value);
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    if ((/[a-z\d]/i.test(e.nativeEvent.data)) || (e.nativeEvent.data === ',') || (e.nativeEvent.data === ' ')) {
      setValue(e.target?.value);
    } else {
      alert('только латиница и запятые');
      setValue('');
    }
  };

  const { arr, loading, value, group } = state;

  return (
    <Context.Provider value={{ arr, loading, value, group, loadGiph, changeValue, deleteGiphs, setValue, setGroup }}>
      {children}
    </Context.Provider>
  )
};