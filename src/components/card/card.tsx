import React from 'react';

import { Item } from '../../interfaces';

import './card.css'

interface Props {
  info: Item,
  setValue: (event: any) => void
};

const Card: React.FC<Props> = ({ info, setValue }) => {
  return (
    <div
      className="card"
      onClick={setValue}
    >
      {info.url.map((img: any, idx: any) => {
        return (
          <img
            className="giph"
            key={idx}
            style={{ height: info.url.length > 1 ? '50%' : '100%' }}
            src={img} 
            alt="item"
          />
        )
      })}
    </div>
  )
};

export default Card;