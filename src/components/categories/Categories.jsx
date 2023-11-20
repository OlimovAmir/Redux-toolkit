import React from 'react'
import stylesCotegories from './Categories.module.css'
import { Link } from 'react-router-dom'

function Categories({ id, title, products = [], amount }) {
    const list = products.filter((_, i) => i < amount)
    //console.log('log categories--->', list)
    return (
        <section className={stylesCotegories.section}>
            <h2 className={stylesCotegories.title} >{title}</h2>
            <div className={stylesCotegories.list}>
                {list.map(({ id, name, image }) => (
                    <Link to={`/categories/${id}`} key={id} className={stylesCotegories.item}>
                        <div
                            className={stylesCotegories.image}
                            style={{
                                backgroundImage: image && image.length > 0 ? `url(${image})` : '',
                                border: '2px solid rgb(49, 49, 49)',
                                backgroundSize: 'cover',
                                height: '250px',
                                width: '180px',
                            }}
                            alt="Product Image"
                        >
                        </div>
                        <h3 className={stylesCotegories.title}> {name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Categories