import './card.css'


function Card({title, image, description, rating, price,i, star, btn}) {


  return (
     <div key={i} className='card'>
            <div className='productImg'>
            <img src={image} width={100} alt={title}/>
            </div>
              
            <div>
            <hr />
            </div>
            <h1>
              {
                title
              }
            </h1>
            <p>
              {
                description
              }
            </p>
            <div className='btnMainRating'>
            <button className='btn'>Buy | ${price}</button>
            <button className='btn'>{rating} <img src={star} width={15} alt='star' /></button>
            </div>
          </div>
  )
}

export default Card