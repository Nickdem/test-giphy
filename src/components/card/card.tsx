import React from 'react';
import { Item } from '../../interfaces';

interface Props {
  info: Item,
  setValue: (event: any) => void
};

const Card: React.FC<Props> = ({ info, setValue }) => {
  return (
    <div
      style={{ width: '400px', height: '400px', padding: '1rem' }}
      onClick={setValue}
    >
      {info.url.map((img: any, idx: any) => {
        return (
          <img
            key={idx}
            style={{ width: '100%', height: info.url.length > 1 ? '50%' : '100%' }}
            src={img} alt="item"
          />
        )
      })}
    </div>
  )
};

export default Card;