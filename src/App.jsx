import React from 'react'

import Nav from './Components/Nav'
import Intro from './Components/Intro'
import { Main_films } from './Components/Main_films'
import intro_bg from './assets/images/intro_bg.png'
// import Main from './Components/Main'
import play from "./assets/images/play.svg"
import window_title from "./assets/images/widow__title.png"
import window_video from "./assets/videos/video.mp4"
import Main_collections from './Components/Main_collections'
import line from "./assets/images/line.svg"
import Main_series from './Components/Main_series'


const App = () => {
  const nav_menu = [
    { href: "#!", name: "Films" },
    { href: "#!", name: "Serials" },
    { href: "#!", name: "Cartoons" },
    { href: "#!", name: "Collections" }
  ]

  const main_films = [
    { time: "2:14:33", title: "Black Panther", text: "At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so. Here, in the   bowels of the desert lands, there are hidden deposits of a unique metal capable of absorbing..." },
    { time: "2:32:13", title: "The Dark Knight", text: "Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they..." },
    { time: "1:53:45", title: "The Gentlemen", text: "One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracy and made a very good fortune on ..." },
    { time: "2:58:20", title: "The Lord of the...", text: "Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil..." },
  ]

  const button = [
    { bg: "#F18128" }
  ]

  const main_collection = [
    { play: play, title: "All Marvel Films", line: line },
    { play: play, title: "Fast and the Furious", line: line },
    { play: play, title: "Star Wars", line: line },
  ]
  // const main = [
  //   { time: "2:14:33", title: "Black Panther", text: "At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so. Here, in the   bowels of the desert lands, there are hidden deposits of a unique metal capable of absorbing..." },
  //   { time: "2:32:13", title: "The Dark Knight", text: "Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they..." },
  //   { time: "1:53:45", title: "The Gentlemen", text: "One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracy and made a very good fortune on ..." },
  //   { time: "2:58:20", title: "The Lord of the...", text: "Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil..." },
  // ]

  return (
    <>
      <header className="header">
        <div className="header__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="40"
            viewBox="0 0 50 40"
            fill="none"
          >
            <path
              d="M47.6562 0H46.875V2.08333C46.875 2.77083 46.3477 3.33333 45.7031 3.33333H41.7969C41.1523 3.33333 40.625 2.77083 40.625 2.08333V0H9.375V2.08333C9.375 2.77083 8.84766 3.33333 8.20312 3.33333H4.29688C3.65234 3.33333 3.125 2.77083 3.125 2.08333V0H2.34375C1.04492 0 0 1.11458 0 2.5V37.5C0 38.8854 1.04492 40 2.34375 40H3.125V37.9167C3.125 37.2292 3.65234 36.6667 4.29688 36.6667H8.20312C8.84766 36.6667 9.375 37.2292 9.375 37.9167V40H40.625V37.9167C40.625 37.2292 41.1523 36.6667 41.7969 36.6667H45.7031C46.3477 36.6667 46.875 37.2292 46.875 37.9167V40H47.6562C48.9551 40 50 38.8854 50 37.5V2.5C50 1.11458 48.9551 0 47.6562 0ZM9.375 32.0833C9.375 32.7708 8.84766 33.3333 8.20312 33.3333H4.29688C3.65234 33.3333 3.125 32.7708 3.125 32.0833V27.9167C3.125 27.2292 3.65234 26.6667 4.29688 26.6667H8.20312C8.84766 26.6667 9.375 27.2292 9.375 27.9167V32.0833ZM9.375 22.0833C9.375 22.7708 8.84766 23.3333 8.20312 23.3333H4.29688C3.65234 23.3333 3.125 22.7708 3.125 22.0833V17.9167C3.125 17.2292 3.65234 16.6667 4.29688 16.6667H8.20312C8.84766 16.6667 9.375 17.2292 9.375 17.9167V22.0833ZM9.375 12.0833C9.375 12.7708 8.84766 13.3333 8.20312 13.3333H4.29688C3.65234 13.3333 3.125 12.7708 3.125 12.0833V7.91667C3.125 7.22917 3.65234 6.66667 4.29688 6.66667H8.20312C8.84766 6.66667 9.375 7.22917 9.375 7.91667V12.0833ZM37.5 35.4167C37.5 36.1042 36.9727 36.6667 36.3281 36.6667H13.6719C13.0273 36.6667 12.5 36.1042 12.5 35.4167V22.9167C12.5 22.2292 13.0273 21.6667 13.6719 21.6667H36.3281C36.9727 21.6667 37.5 22.2292 37.5 22.9167V35.4167ZM37.5 17.0833C37.5 17.7708 36.9727 18.3333 36.3281 18.3333H13.6719C13.0273 18.3333 12.5 17.7708 12.5 17.0833V4.58333C12.5 3.89583 13.0273 3.33333 13.6719 3.33333H36.3281C36.9727 3.33333 37.5 3.89583 37.5 4.58333V17.0833ZM46.875 32.0833C46.875 32.7708 46.3477 33.3333 45.7031 33.3333H41.7969C41.1523 33.3333 40.625 32.7708 40.625 32.0833V27.9167C40.625 27.2292 41.1523 26.6667 41.7969 26.6667H45.7031C46.3477 26.6667 46.875 27.2292 46.875 27.9167V32.0833ZM46.875 22.0833C46.875 22.7708 46.3477 23.3333 45.7031 23.3333H41.7969C41.1523 23.3333 40.625 22.7708 40.625 22.0833V17.9167C40.625 17.2292 41.1523 16.6667 41.7969 16.6667H45.7031C46.3477 16.6667 46.875 17.2292 46.875 17.9167V22.0833ZM46.875 12.0833C46.875 12.7708 46.3477 13.3333 45.7031 13.3333H41.7969C41.1523 13.3333 40.625 12.7708 40.625 12.0833V7.91667C40.625 7.22917 41.1523 6.66667 41.7969 6.66667H45.7031C46.3477 6.66667 46.875 7.22917 46.875 7.91667V12.0833Z"
              fill="white"
            />
          </svg>
          <p className="header__top-text">See no special offer restrictions</p>

        </div>

        <nav className="nav">
          <div className="container">
            <Nav nav_menu={nav_menu} />
          </div>
        </nav>

        <div className="intro" style={{ backgroundImage: `url(${intro_bg})` }}>
          <div className="container">
            <Intro />
          </div>
        </div>
      </header>

      <main>
        <section className="film">
          <div className="container">
            <h2 className="title">films</h2>
            <div className="film__box">
              {< Main_films main_films={main_films} />}
            </div>
          </div>
        </section>

        <section className="widow">
          <div className="container">
            <img src={window_title} alt="" className="widow__title" />
            <p className="widow__text">
              After the events at the Leipzig-Halle airport, Natasha was overtaken
              by the mistakes of the past. The Red Room again made itself felt - a
              program to create Widows - professional killers and spies - just
              like her. Natasha decides once and for all to deal with people whose
              efforts she herself became a Widow.
            </p>
            <a href="#!" className="link">Watch now</a>
          </div>
          <video autoPlay muted loop src={window_video} className="widow__video"></video>
        </section>

        <section className="collect">
          <div className="container">
            <h2 className="title">Collections</h2>
            <div className="collect__box">

              {<Main_collections main_collection = { main_collection } />}

            </div>
          </div>
        </section>

        <section className="game">
        <div className="container">
          <h2 className="title">Series</h2>
          <div className="game__box">
            <h2 className="game__title">Game of Thrones</h2>
            <p className="game__text">
              The time of prosperity is drawing to a close, and the summer,
              which lasted almost a decade, is dying away. Around the center of
              power of the Seven Kingdoms, the Iron Throne, a conspiracy is
              ripening, and during this difficult time, the king decides to seek
              support from his youth friend Eddard Stark. In a world where
              everyone - from the king to the mercenary - is eager for power,
              intrigues and is ready to stick a knife in the back, there is ...
            </p>
            <a href="#!" className="link">Watch now</a>
          </div>
          <div className="series__box">
            
            <Main_series main_collection={main_collection} />

          </div>
        </div>
      </section>

      </main>
    </>

  )

}



export default App


