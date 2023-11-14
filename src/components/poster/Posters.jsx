import React from 'react'
import stylesPoster from './Posters.module.css'
import fotoKomp from '../../img/k1.svg'

function Posters() {
  return (
    <div className={stylesPoster.posters}>
        <h1>BIG SALE 20%</h1>
        <p>The bestseller of 2022</p>
        <h2>LENNON R2D2 WITH</h2>
        <h2>NVIDIA 5090TI</h2>
        <button className={stylesPoster.button}>Shop now</button>
        <img className={stylesPoster.foto} src={fotoKomp} alt="foto" />
    </div>
  )
}

export default Posters