import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Productlistpage from "../../components/Homepage/productList";
import { fetchProducts, fetchProductsByOutlet, selectProductLists } from '../../store/productSlice';
import Outlets from '../Outlets/outlet';
import { selectoutletLists } from '../../store/outletSlice';

type productlist = {
    products: {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription: string;
        productImage: string;
    }[];
}

function ProductList() {

    const dispatch = useAppDispatch();

    const productList = useAppSelector(selectProductLists);
    const outletList = useAppSelector(selectoutletLists);
   

    useEffect(() => {
        dispatch(fetchProducts());
        //dispatch(fetchProductsByOutlet(outletList.selectedOutlet));
    }, [dispatch]);





    return (
        <div>
            
            <Outlets/>
            
            < Productlistpage products={productList.productList} />

        </div>
    )
}

export default ProductList