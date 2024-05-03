import React from 'react'
import { series } from '../dates/series'

const Section_series = () => {
    return (
        <>
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

                {
                    series.map(values => (
                        <div className="series__card" key={values.title}>
                            <img src={values.image} alt="" className="series__img" />
                            <a href="#!">
                                <img src={values.play} alt="" />
                            </a>
                            <h2 className="series__title">{values.title}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Section_series