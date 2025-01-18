import {client} from '@/sanity/lib/client'
import { error } from 'console';
import React from 'react'
import product from '../schemaTypes/product';




 export interface product {
    
    ImageUrls: any;
    map(arg0: (product: product) => React.JSX.Element): React.ReactNode | Iterable<React.ReactNode>;
    id: string;
    name: string;
    quantityAvailable:number;
    imageUrls: string;
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
}
export const getAllProducts = async () => {
    try
    {
        const queryAllProducts ="*[_type == 'product']{_id,name,quaninty,price,category,colors,description}"
        const product = await client.fetch(queryAllProducts);
        return product;
    }
 catch (error)
 {
    console.log(error);
    
 }
}