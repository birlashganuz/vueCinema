import React from 'react'
import { collection } from '../dates/collections'

const Section_collections = () => {
  return (
    <>
    <>
            {
                collection.map(values => (
                    <div className="collect__card" key={values.title}>
                        <img className="collect__left" src={values.line} alt="" />
                        <img className="collect__right" src={values.line} alt="" />
                        <img className="collect__play" src={values.play} alt="" />
                        <h2 className="collect__title">{values.title}</h2>

                    </div>
                ))
            }
        </>
    </>
  )
}

export default Section_collections