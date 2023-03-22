import './Product.css'
import { requestOneProduct } from '../../lib/requests'
import { useEffect, useState } from 'react'
export const Product = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    requestOneProduct().then((res) => {
      setData(res)
    })
  }, [])

  return (
    <div className='page-container'>
      {/*   header va aqui  */}
      <div className='product-container'>
        <section className='image-container'>
          <img
            className='image-product'
            src=''
            alt='Product'
          />
          <button className='button-social'>Share on social media</button>
        </section>
        <section>
          <h2 className='name-product'> Name product</h2>
          <strong className='price-product'>${data.price}</strong>
          <p className='description-product'>Description</p>
          <button className='button-add-to-cart'>Add to cart</button>
        </section>
      </div>
    </div>
  )
}
