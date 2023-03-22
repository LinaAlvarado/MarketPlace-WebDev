import "./style.css"
export const Card = ({element}) => {


    return (
        <div className="card">

            <div class="c-Product__info">
                <img class="c-Product__img" src={element.images ? element.images[0] : ''} alt="" />
                <div class="c-Product__name">{element.title}</div>
                <div class="c-Product__price">$ {element.price}</div>
                <span class="c-Product__desccrption"> {element.description}</span>
            </div>

            {/* <div class="c-Product__buttonPay c-button">AGREGAR</div> */}

        </div>
    )
}