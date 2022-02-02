import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch , useAppSelector} from '../../hooks';
import Productlistpage from "../../components/Homepage/productList";
import { fetchProducts , selectProductLists } from '../../store/productSlice';

type productlist = {
    products: {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription:string;
        productImage:string;
    }[];

    
}

function ProductList() {

    

    const dispatch = useAppDispatch();

    const productList = useAppSelector(selectProductLists);

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);



   

    return (
        <div>
           {/* {console.log(productList)} */}
           
            < Productlistpage products={productList.productList} />

        </div>
    )
}

export default ProductList