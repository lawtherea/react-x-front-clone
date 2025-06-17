import React from 'react';

import optionsIcon from '../../assets/options.svg';
import commentIcon from '../../assets/comment.svg';
import retweetIcon from '../../assets/retweet.svg';
import likeIcon from '../../assets/like.svg';
import viewsIcon from '../../assets/views.svg';
import savesIcon from '../../assets/saves.svg';
import sendIcon from '../../assets/send.svg';

export const Tweet = ({
  authorName = "Lorem Ipsum",
  authorSlug = "@loremipsum",
  publishTime = "9h",
  content = "Hello world!",
  profileImage = "/images/profile-image-1.jpg",
  commentCount = 1,
  retweetCount = 2,
  likeCount = 5,
  viewCount = "5 mil",
  imageUrl = null
}) => {
  return (
    <article className="tweet">
      <img className="tweet__author-icon" src={profileImage} alt={`${authorName} avatar`} />
      
      <section className="tweet__main">
        <header className="tweet__header">
          <span className="tweet__user-info">
            <strong className="tweet__author-name">{authorName}</strong>
            <span className="tweet__author-slug">{authorSlug}</span>
            <time className="tweet__publish-time">{publishTime}</time>
          </span>
          <button className="tweet__settings" aria-label="Mais opções">
            <img src={optionsIcon} alt="Opções" />
          </button>
        </header>

        <p className="tweet__content">{content}</p>

        {imageUrl && (
          <img src={imageUrl} alt="Conteúdo do tweet" className="tweet__image" />
        )}

        <footer className="tweet__options">
          <section className="tweet__options-left">
            <button className="tweet__option" aria-label="Comentários">
              <img src={commentIcon} className="tweet__options-icons" alt="Comentários" />
              <span>{commentCount}</span>
            </button>
            <button className="tweet__option" aria-label="Retweets">
              <img src={retweetIcon} className="tweet__options-icons" alt="Retweets" />
              <span>{retweetCount}</span>
            </button>
            <button className="tweet__option" aria-label="Curtidas">
              <img src={likeIcon} className="tweet__options-icons" alt="Curtidas" />
              <span>{likeCount}</span>
            </button>
            <button className="tweet__option" aria-label="Visualizações">
              <img src={viewsIcon} className="tweet__options-icons" alt="Visualizações" />
              <span>{viewCount}</span>
            </button>
          </section>

          <section className="tweet__options-right">
            <button aria-label="Salvar">
              <img src={savesIcon} className="tweet__options-icons" alt="Salvar" />
            </button>
            <button aria-label="Compartilhar">
              <img src={sendIcon} className="tweet__options-icons" alt="Compartilhar" />
            </button>
          </section>
        </footer>
      </section>
    </article>
  );
};