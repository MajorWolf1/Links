import telegram from '../assets/telegram.png'
import session from '../assets/session.png'
import discord from '../assets/discord.png'
import instagram from '../assets/instagram.png'
import snapchat from '../assets/snapchat.png'
import twitter from '../assets/twitter.png'
import xbox from '../assets/xbox.png'
import psn from '../assets/psn.png'
import steam from '../assets/steam.png'
import nintendo from '../assets/nintendo.png'
export default function App() {
  const text =
  "ddddd"
  return (
    <div className="App">
      <h1>Copy to Clipboard!</h1>
      <h4>By Tanya</h4>
      <p>{text}</p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(text);
        }}
      >
        Copy
      </button>
    </div>
  );
}
    
const items = [{
    "title": "Telegram",
    "subtitle": "Chat with me instantly, Don't hesitate! ",
    "image": telegram,
    "link": "https://telegram.me/MitchellP" //Telegram Profile 
},
{
    "title": "Session",
    "subtitle": "Drop me a message on Session",
    "image": session,
},
{
    "title": "Discord",
    "subtitle": "Drop me a message on Discord",
    "image": discord,
    "link": "https://www.discord.com/users/438439251009601537" //Discord Profile Link 
},
{
    "title": "Instagram",
    "subtitle": "Hub of my awesome 😎 pics",
    "image": instagram,
    "link": "https://www.instagram.com/mitchp3598/" //Instagram Profile Link 
},
{
    "title": "Snapchat",
    "subtitle": "Send me a picture or two.",
    "image": snapchat,
    "link": "https://www.snapchat.com/add/Mitch9835" //Snapchat Profile Link
},
{
    "title": "Twitter",
    "subtitle": "Don't forget to follow me 😉",
    "image": twitter,
    "link": "https://twitter.com/AMFMitch"//Twitter Profile Link 
},
{
    "title": "XBOX",
    "subtitle": "AMFMitch9106",
    "image": xbox,
    "link": "http://live.xbox.com/Profile?Gamertag=AMFMitch9106"//XBOX Profile Link
},
{
    "title": "PSN",
    "subtitle": "AMFMitch",
    "image": psn,
    "link": "#"//PSN Profile Link
},
{
    "title": "Steam",
    "subtitle": "SonOfAMitch",
    "image": steam,
    "link": "https://steamcommunity.com/id/MitchP98/"//Steam Profile Link 
}
{
    "title": "Nintendo",
    "subtitle": "Mitch",
    "image": nintendo,
    "link": "https://lounge.nintendo.com/friendcode/0150-5672-1734/DGxWzXtGRk"//Nintendo Profile Link 
}]

export default items
