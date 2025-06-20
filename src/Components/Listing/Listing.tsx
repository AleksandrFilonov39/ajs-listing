import type { IListing } from '../../modules/listing'
import './Listing.css'

interface ListingProps  {
    items: IListing[]
}

function Listing( { items = [] } : ListingProps) {

  return (
    <div className="item-list">
        {items.map(el =>{
            if(el.title?.length > 50) {
                el.title = `${el.title.slice(0, 50)}...`
            }
            let innerPrice;

            if(el.currency_code === 'USD') {
                innerPrice = `$${el.price}`
            } else if(el.currency_code === 'EUR') {
                innerPrice = `€${el.price}`
            } else {
                innerPrice = `${el.price}${el.currency_code}`
            }

            let classNameQuantity;

            if(el.quantity <= 10) {
                classNameQuantity = 'level-low'
            } else if (el.quantity <= 20) {
                classNameQuantity = 'level-medium'
            } else {
                classNameQuantity = 'level-high'
            }
       
            return(
                 <div className="item" key={el.listing_id}>
                    <div className="item-image">
                        <a href={el.url}>
                            <img src={el.MainImage?.url_570xN}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{el.title}</p>
                        <p className="item-price">{innerPrice}</p>
                        <p className={`item-quantity ${classNameQuantity}`}>{el.quantity} left</p>
                    </div>
                </div>
        )})}
    </div>
  )
}

export default Listing
