import React from 'react';
import '../../css/right.css'; 

export const FollowItem = ({ name, slug, avatar }) => {
  return (
    <div className="who-to-follow__block">
      <img className="who-to-follow__author-logo" src={avatar} alt={name} />
      <div className="who-to-follow__content">
        <div>
          <div className="who-to-follow__author-name">{name}</div>
          <div className="who-to-follow__author-slug">{slug}</div>
        </div>
        <div className="who-to-follow__button">Seguir</div>
      </div>
    </div>
  );
};
