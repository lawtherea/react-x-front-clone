import React from 'react'
import { useState } from 'react';
import { Write } from './write';
import { TweetList } from './tweetlist';

const TimelineItem = ({ text, isActive, onClick }) => (
  <button
    className={`timeline-button ${isActive ? 'timeline-button--active' : ''}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export const Timelines = () => {
  const [activeItem, setActiveItem] = useState('Para você');

  return (
    <div>
      <nav className='timeline-header'>
        <TimelineItem
          text="Para você"
          isActive={activeItem === 'Para você'}
          onClick={() => setActiveItem('Para você')}
        />
        <TimelineItem
          text="Seguindo"
          isActive={activeItem === 'Seguindo'}
          onClick={() => setActiveItem('Seguindo')}
        />
      </nav>

      <Write />
      <TweetList activeTimeline={activeItem} />
    </div>
  );
};