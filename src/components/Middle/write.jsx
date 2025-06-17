import React from 'react'
import imageIcon from '../../assets/image.svg'
import gifIcon from '../../assets/gif.svg'
import grokIcon from '../../assets/grok.svg'
import pollIcon from '../../assets/poll.svg'
import emojiIcon from '../../assets/emoji.svg'
import scheduleIcon from '../../assets/schedule.svg'
import locationIcon from '../../assets/location.svg'
import userAvatar from '../../images/profile-image-1.jpg'

const WriteIcon = ({icon}) => {
  return (
    <img className='writearea-icon' src={icon} />
  )
}

export const Write = () => {
  return (
    <div className='writearea-wrapper'>
      <img src={userAvatar} className='writearea-avatar' />

      <div className='writearea-main'>
        <textarea className='writearea' placeholder="O que está acontecendo?" />
        <div className='writearea-toolbar'>
          <div className='writearea-icons'>
            <WriteIcon icon={imageIcon} />
            <WriteIcon icon={gifIcon} />
            <WriteIcon icon={grokIcon} />
            <WriteIcon icon={pollIcon} />
            <WriteIcon icon={emojiIcon} />
            <WriteIcon icon={scheduleIcon} />
            <WriteIcon icon={locationIcon} />
          </div>
          <button className="writearea-button">Postar</button>
        </div>
      </div>
    </div>
  )
}
