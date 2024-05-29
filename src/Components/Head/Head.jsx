import React from 'react'
import './Head.css'

const Head = ({title,para}) => {
  return (
    <>
        <section className="head">
            <div className="container">
                <h2>{title}</h2>
                <p>{para}</p>
            </div>
        </section>
    </>
  )
}

export default Head