import * as React from 'react';
import logo from './logo.svg';
import { YouTubeEmbed } from './Components/Embed/YouTubeEmbed';
import { TwitterEmbed } from './Components/Embed/TwitterEmbed';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <YouTubeEmbed
          videoId="oiSpQbQKm-w"
          owner="LYON S.P.D."
          ownerHandle="LYONSPD"
          title="I wake up in the morning like this | Time To Tweet! (Gmod animation)"
        />
         <YouTubeEmbed 
          videoId="TSMFOpiYldg"
          owner="raspmary"
          ownerHandle="raspmary"
          title="Deltarune | BIG SHOT [Sonic Advance 3 style]"
        />
        <YouTubeEmbed 
          videoId="k50zg1rR_Lk"
          owner="raspmary"
          ownerHandle="raspmary"
          title="Deltarune | THE WORLD REVOLVING [Sonic Advance 3 style]"
        />
        <YouTubeEmbed
          videoId="HnyGSl3K-IE"
          owner="iteachvader"
          ownerHandle="iteachvader"
          title="Hedgehog Stew"
        />
        <YouTubeEmbed
          videoId="rsTfndJIXXw"
          owner="TheRonanch"
          ownerHandle="bananainc3526"
          title="Pillar John's Revenge Remix (The COMPLETE Recipe)"
        />
        <TwitterEmbed
          tweetId="1679326882951753729"
          tweeter={{
            displayName: "Froglet",
            username: "Fomplet8"
          }}
        />
        <TwitterEmbed
          tweetId="1679536654778785819"
          tweeter={{
            displayName: "Youssef Land * Twitter 𝕏 Hater Warning!",
            username: "TwitXHater"
          }}
        />
      </header>
    </div>
  );
}
