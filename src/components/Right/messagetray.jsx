import React, { useEffect, useState } from 'react';
import '../../css/chattray.css';
import expandArrow from '../../assets/expand-arrow.svg';
import messageAdd from '../../assets/message-add.svg';
import sendIcon from '../../assets/send-message-button.svg';
import backArrow from '../../assets/back-arrow.svg';
import collapseArrow from '../../assets/collapse-arrow.svg';

export const MessageTray = () => {
  const [users, setUsers] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [collapsed, setCollapsed] = useState(true);

  const messages = [
    'Olá, tudo bem?',
    'Estou bem e você?',
    'Isso faz sentido.',
    'kkk',
    'Não sei te dizer.',
    'Pode ser sim!',
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const withAvatars = data.slice(0, 9).map((user, index) => {
          const msg = messages[index % messages.length];
          return {
            id: user.id,
            name: user.name,
            slug: `@${user.username.toLowerCase()}`,
            message: msg,
            avatar: `https://i.pravatar.cc/150?u=${user.email}`,
            messages: [
              { from: 'left', text: 'Oi, como você está?' },
              { from: 'right', text: msg },
            ],
          };
        });
        setUsers(withAvatars);
      });
  }, []);

  const handleToggleTray = () => {
    if (selectedChat) {
      setSelectedChat(null);
      setCollapsed(false); // garante que a lista esteja visível
    } else {
      setCollapsed(prev => !prev);
    }
  };

  const closeChat = (e) => 
    {setSelectedChat(null);
      e.stopPropagation();
  }

  return (
    <>
      {selectedChat ? <div className="chat-window">
          <div className="chat-window__header">
            <div className="chat-window__user">
              <button className="chat-window__back" aria-label="Voltar" onClick={closeChat}>
                <img src={backArrow} alt="Voltar para lista" />
              </button>
              <div className="chat-window__info">
                <div className="chat-window__name">{selectedChat.name}</div>
                <div className="chat-window__slug">{selectedChat.slug}</div>
              </div>
            </div>
            <button className="chat-window__close" aria-label="Fechar" onClick={closeChat}>
              <img src={collapseArrow} alt="Fechar conversa" />
            </button>
          </div>

          <div className="chat-window__messages">
            {selectedChat.messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>{msg.text}</div>
            ))}
            <div className="chat-timestamp">22 de abr de 2025 4:45 PM</div>
          </div>

          <div className="chat-window__input">
            <input type="text" placeholder="Iniciar uma nova mensagem" />
            <button className="send-button">
              <img src={sendIcon} alt="Enviar" />
            </button>
          </div>
        </div> : <div className="tray-chat-list" id="tray-chat-list">
        <div className="tray-button" id="tray-button" onClick={handleToggleTray}>
          <span className="tray-button__title">Mensagens</span>
          <div className="tray-button__icons">
            <img src={messageAdd} className="tray-button__icon" alt="Nova mensagem" />
            <img
              src={collapsed ? expandArrow : collapseArrow}
              className="tray-button__icon"
              alt={collapsed ? "Expandir" : "Recolher"}
            />
          </div>
        </div>

        <div className={`tray-chat-list__content ${collapsed ? 'collapsed' : ''}`}>
          {users.map(user => (
            <div
              className="tray-chat"
              key={user.id}
              onClick={() => {
                setSelectedChat(user);
                setCollapsed(true);
              }}
            >
              <img className="chat__user-icon" src={user.avatar} alt={user.name} />
              <div className="chat__preview">
                <div className="chat__header">
                  <span className="chat__author-name">{user.name}</span>
                  <span className="chat__author-slug">{user.slug}</span>
                  <span className="chat__message-time">· 9h</span>
                </div>
                <div className="chat__content">{user.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>}
    </>
  );
};
