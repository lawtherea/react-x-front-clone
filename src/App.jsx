import './css/global.css'
import './css/sidebar.css'
import './css/brand.css'
import './css/timelines.css'
import './css/write.css'
import './css/tweet.css'
import './css/right.css'
import { Sidebar } from "./components/Sidebar/sidebar"
import { Timelines } from "./components/Middle/timelines"
import { Write } from "./components/Middle/write"
import { TweetList } from './components/Middle/tweetlist';
import { TrendItem } from "./components/Right/trenditem";
import { FollowItem } from "./components/Right/followitem";
import { WhoToFollow } from "./components/Right/whotofollow";
import { MessageTray } from './components/Right/messagetray';

function App() {
  return (
    <div className='sections'>
      <Sidebar />
      <main className='main-content'>
        <Timelines />
        {/*Write está em Timelines*/}
        {/*Tweetlist está em Timelines*/}
      </main>
      <aside className='rightsection'>
        <div className='rightsection-elements'>
          <div className='trendingtopics'>
            <h2 className='trendingtitle'>O que está acontecendo</h2>
            <TrendItem category="Assuntos do momento" name="Balela" count="14,1 mil posts"/>
            <TrendItem category="Entretenimento" name="Harry Styles" count="14,1 mil posts"/>
            <TrendItem category="Promoção" name="#BlackFridayAmazon" count="14,1 mil posts"/>
            <TrendItem category="Esportes · Assuntos do Momento" name="Lebron James" count="14,1 mil posts"/>
            <TrendItem category="Esportes · Assuntos do Momento" name="Miami Heat" count="14,1 mil posts"/>
            <TrendItem category="Política" name="Conclave" count="14,1 mil posts"/>
          </div>
          <WhoToFollow />
        </div>
      </aside>
      <MessageTray />
    </div>
  )
}

export default App