import React from 'react'

const Main_collections = ({ main_collection }) => {
    return (
        <>
            {
                main_collection.map(values => (
                    <div className="collect__card" key={values.title}>
                        <img className="collect__left" src={values.line} alt="" />
                        <img className="collect__right" src={values.line} alt="" />
                        <img className="collect__play" src={values.play} alt="" />
                        <h2 className="collect__title">{values.title}</h2>

                    </div>
                ))
            }
        </>
    )
}

export default Main_collections