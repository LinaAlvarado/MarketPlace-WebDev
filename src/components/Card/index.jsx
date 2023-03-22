import './style.css'
import { useNavigate } from 'react-router-dom'
export const Card = ({ element }) => {

    const navigate = useNavigate()
    
  function onclick() {
    navigate('/product')
    }
    
  return (
    <div className='card'>
      <div class='c-Product__info'>
        <img
          class='c-Product__img'
          src={element.images ? element.images[0] : ''}
          alt=''
        />
        <div class='c-Product__name'>{element.title}</div>
        <div class='c-Product__price'>$ {element.price}</div>
        <span class='c-Product__desccrption'> {element.description}</span>
        <button onClick={onclick}>See</button>
      </div>
    </div>
  )
}
