import React from 'react'
import Section_films from './Section_films.jsx';
import Section_widow from './Section_widow.jsx';
import Section_collections from './Section_collections.jsx';
import Section_series from './Section_series.jsx';

const Main = () => {
  return (
    <>
      <section className="film">
        <div className="container">
          <h2 className="title">films</h2>
          <div className="film__box">

            {
              <Section_films />
            }

          </div>
        </div>
      </section>
      <section className="widow">
        {
          <Section_widow />
        }
      </section>

      <section className="collect">
        <div className="container">
          <h2 className="title">Collections</h2>
          <div className="collect__box">

            {
              <Section_collections />
            }

          </div>
        </div>
      </section>
      <section className="game">
        <div className="container">
          <h2 className="title">Series</h2>
          {
            <Section_series />
          }
        </div>
      </section>
    </>
  )
}

export default Main