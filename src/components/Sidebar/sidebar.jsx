import React from 'react'
import xLogo from '../../assets/x.svg';
import homeIcon from '../../assets/home.svg'
import exploreIcon from '../../assets/explore.svg'
import notifIcon from '../../assets/notifications.svg'
import messagesIcon from '../../assets/messages.svg'
import grokIcon from '../../assets/grok.svg'
import savesIcon from '../../assets/saves.svg'
import comunitiesIcon from '../../assets/comunities.svg'
import premiumIcon from '../../assets/premium.svg'
import verifiedsIcon from '../../assets/verifiedorg.svg'
import profileIcon from '../../assets/profile.svg'
import moreIcon from '../../assets/more.svg'
import postIcon from '../../assets/post.svg'

const NavItem = ({icon, text}) => {
  return (
    <div className='sidebar-item'>
      <img className='sidebar-item__icon' src={icon} />
      <span className='sidebar-item__text'>{text}</span>
    </div>
  )
}

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='brand-wrapper'>
        <img src={xLogo} className='brand'/>
      </div>

      <nav>
        <NavItem icon={homeIcon} text="Página Inicial"/>
        <NavItem icon={exploreIcon} text="Explorar"/>
        <NavItem icon={notifIcon} text="Notificações"/>
        <NavItem icon={messagesIcon} text="Mensagens"/>
        <NavItem icon={grokIcon} text="Grok"/>
        <NavItem icon={savesIcon} text="Itens salvos"/>
        <NavItem icon={comunitiesIcon} text="Comunidades"/>
        <NavItem icon={premiumIcon} text="Premium"/>
        <NavItem icon={verifiedsIcon} text="Organizações Verificadas"/>
        <NavItem icon={profileIcon} text="Perfil"/>
        <NavItem icon={moreIcon} text="Mais"/>
      </nav>

      <div className='sidebar-postbutton'>
        <img src={postIcon} className='sidebar-postbutton__icon' />
        <span className='sidebar-postbutton__text'>Postar</span>
      </div>
    </div>
  )
}
