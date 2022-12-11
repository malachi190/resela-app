import iphone from '../assets/popular/iphone.png'
import sneakers from '../assets/popular/sneakers.png'

export const cart = [
    {
        productId: 1,
        productName: 'Iphone 13pro max',
        productImage: iphone,
        productSpecs: {color:['Black', 'Red', 'Green']},
        productDesc: 'lorem ipsum dolor...',
        productPrice: 300000,
        productOldPrice: 250000,
        productBrand: 'Apple',
        inStock: true,
        favourite: false
    },
    {
        productId: 2,
        productName: 'Airforce 1 Sneakers',
        productImage: sneakers,
        productSpecs: {color:['Black', 'Red', 'Green']},
        productDesc: 'lorem ipsum dolor...',
        productPrice: 30000,
        productOldPrice: 25000,
        productBrand: 'Airforce',
        inStock: true,
        favourite: false
    }
]