import React from 'react'

const Main_series = (main_series) => {
    return (
        <>
{
              serie.map(values =>
                <div className="series__card">
                  <img src={values.image} alt="" className="series__img" />
                  <a href="#!"><img src={values.play} alt="" /></a>
                  <h2 className="series__title">{values.title}</h2>
                </div>

              )
            }
        </>
    )
}

export default Main_series