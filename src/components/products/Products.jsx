import React from 'react'
import stylesProduct from './Products.module.css'
import { Link } from 'react-router-dom'


function Products({ title, products = [], amount, style = {} }) {
    const list = products.filter((_, i) => i < amount)
    return (
        <section className={stylesProduct.products} style={style}>
            {title && <h2>{title}</h2>}
            <div className={stylesProduct.list}>
                {list.map(({
                    id,
                    images,
                    title,
                    category: { name: cat },
                    price,

                }) =>
                    <Link to={`/products/${id}`} key={id} className={stylesProduct.product}>

                        <div
                            className={stylesProduct.image}
                            style={{
                                backgroundImage: images && images.length > 0 ? `url(${encodeURI(images[0])})` : '',
                                border: '2px solid rgb(49, 49, 49)',
                                backgroundSize: 'cover',
                                height: '250px',
                                width: '180px',
                            }}
                            alt="Product Image"
                        >
                        </div>
                        <div className={stylesProduct.wrapper} >
                            <h3 className={stylesProduct.title}>{title}</h3>
                            <div className={stylesProduct.cat}>{cat}</div>
                            <div className={stylesProduct.info}>
                                <div className={stylesProduct.prices}>
                                    <div className={stylesProduct.price}>{price}$</div>
                                    <div className={stylesProduct.oldPrice}>{Math.floor(price * 0.8)}$</div>
                                </div>
                                <div className={stylesProduct.purchases}>
                                    {Math.floor(Math.random() * 20 + 1)} purchased
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </section>

    )
}

export default Products