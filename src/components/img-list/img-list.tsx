import React, { useContext } from 'react';

import Card from '../card';
import { Context } from '../../context';

import { Item } from '../../interfaces';
import { upgrateArr } from '../../utils';

import './img-list.css'

const ImgList: React.FC = () => {

  const { arr, setValue, group } = useContext(Context);

  const renderCard = (data: Item[], tag?: string) => {
    return data.map((item: any, idx: number) =>
      <Card
        key={idx}
        info={{ url: tag ? item : item.url, name: tag ? tag : item.name }}
        setValue={() => setValue(tag ? tag : item.name)}
      />
    )
  };

  if (group) {
    const newArr = upgrateArr(arr);

    return (
      <main>
        {newArr && newArr.map((d: any, i: number) =>
          <div className="group" key={i}>
            <h3 className="group-title">{d.name}</h3>
            {renderCard(d.url, d.name)}
          </div>
        )}
      </main>
    )
  }
  return (
    <main className="main">
      {arr && renderCard(arr)}
    </main>
  )
};

export default ImgList;