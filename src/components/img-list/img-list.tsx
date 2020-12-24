import React, { useContext } from 'react';
import { Context } from '../../context/context';
import { Item } from '../../interfaces';
import { upgrateArr } from '../../utils';
import Card from '../card/card';

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
          <div key={i} style={{ width: '700px', padding: '1rem' }}>
            <h3>{d.name}</h3>
            {renderCard(d.url, d.name)}
          </div>
        )}
      </main>
    )
  }
  return (
    <main style={{ display: 'flex' }}>
      {arr && renderCard(arr)}
    </main>
  )
};

export default ImgList;