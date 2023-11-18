import React from 'react'
import stylesBanner from './Banner.module.css'
import imgBanner from '../../img/bunner1.jpg';

function Banner() {
  return (
    <section className={stylesBanner}>
      <div className={stylesBanner}>
        <p className={stylesBanner}>
          NEW YEAR
          <span>SALE</span>
        </p>
        <button className={stylesBanner}>See more</button>
      </div>
      <div
        className={stylesBanner.right}
        style={{
          backgroundImage: `url(${imgBanner})`,
          border: '2px solid rgb(49, 49, 49)',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
        }}
        alt="Banner Image"
      >
        <p className={stylesBanner.discount}>
          save up to <span> 50% </span> of
        </p>

      </div>
    </section>
  )
}

export default Banner