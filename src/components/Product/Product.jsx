import './Product.css'
import { requestOneProduct } from '../../lib/requests'
import { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
export const Product = () => {
    
  const [data, setData] = useState([])

  useEffect(() => {
    requestOneProduct().then((res) => {
      setData(res)
    })
  }, [])

    return (
         <>
        <NavBar/>
    <div className='page-container'>
      <div className='product-container'>
        <section className='image-container'>
          <img
            className='image-product'
            src={data.images ? data.images[0] : ''}
            alt='Product'
          />
          <button className='button-social'>Share on social media</button>
        </section>
        <section>
          <h2 className='name-product'>{data.title} </h2>
          <strong className='price-product'>${data.price}</strong>
          <p className='description-product'>{data.description}</p>
          <button className='button-add-to-cart'>Add to cart</button>
        </section>
      </div>
            </div>
            </>
  )
}
