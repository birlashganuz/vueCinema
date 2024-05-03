import React from 'react'
import window_title from "../assets/images/widow__title.png"
import window_video from "../assets/videos/video.mp4"

const Section_widow = () => {
    return (
        <>
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
            <video autoPlay muted loop src={window_video} className="widow__video"
            ></video>
        </>
    )
}

export default Section_widow