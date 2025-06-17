import React, { useState, useEffect } from 'react';
import { Tweet } from './tweet';

const fetchPostsAndUsers = async () => {
  const [postsResponse, usersResponse] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/users'),
  ]);

  const [posts, users] = await Promise.all([
    postsResponse.json(),
    usersResponse.json(),
  ]);

  // Garantir 10 userIds únicos
  const uniquePostsMap = new Map();
  for (const post of posts) {
    if (!uniquePostsMap.has(post.userId)) {
      uniquePostsMap.set(post.userId, post);
    }
    if (uniquePostsMap.size === 10) break;
  }

  const uniquePosts = Array.from(uniquePostsMap.values());

  // Gerar dados combinados com informações dos usuários
  return uniquePosts.map((post) => {
    const user = users.find((u) => u.id === post.userId);
    const timeline = Math.random() < 0.5 ? 'Para você' : 'Seguindo';

    return {
      id: post.id,
      authorName: user?.name || 'Usuário Desconhecido',
      authorSlug: user ? `@${user.username.toLowerCase()}` : '@desconhecido',
      publishTime: `${Math.floor(Math.random() * 12) + 1}h`,
      content: post.body,
      profileImage: `https://i.pravatar.cc/150?u=${user?.email || user?.id}`,
      commentCount: Math.floor(Math.random() * 100),
      retweetCount: Math.floor(Math.random() * 100),
      likeCount: Math.floor(Math.random() * 100),
      viewCount: `${Math.floor(Math.random() * 10)} mil`,
      imageUrl: Math.random() < 0.5 ? `https://picsum.photos/seed/${post.id}/600/400` : null,
      timeline,
    };
  });
};

export const TweetList = ({ activeTimeline }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const loadTweets = async () => {
      try {
        const combinedData = await fetchPostsAndUsers();
        setTweets(combinedData);
      } catch (error) {
        console.error('Erro ao buscar tweets:', error);
      }
    };

    loadTweets();
  }, []);

  const filteredTweets = tweets.filter(tweet => tweet.timeline === activeTimeline);

  return (
    <>
      {filteredTweets.map(tweet => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </>
  );
};
