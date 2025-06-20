export interface IListing {
    listing_id: number, 
    url: string,
    MainImage: {
        url_570xN: string
    },
    title: string,
    currency_code: string,
    price: number | string,
    quantity: number
}