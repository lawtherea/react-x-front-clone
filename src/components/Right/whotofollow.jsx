import React, { useEffect, useState } from 'react';
import { FollowItem } from './followitem';

export const WhoToFollow = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data.slice(0, 5)); // pegar só os 5 primeiros
      } catch (err) {
        console.error('Erro ao buscar usuários:', err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="who-to-follow">
      <div className="who-to-follow__block">
        <div className="who-to-follow__heading">Quem seguir</div>
      </div>
      {users.map((user) => (
        <FollowItem
          key={user.id}
          name={user.name}
          slug={`@${user.username.toLowerCase()}`}
          avatar={`https://i.pravatar.cc/150?u=${user.email}`}
        />
      ))}
      <div className="who-to-follow__block">
        <div className="who-to-follow__content">
          <div className="who-to-follow__more">Mostrar mais</div>
        </div>
      </div>
    </div>
  );
};
