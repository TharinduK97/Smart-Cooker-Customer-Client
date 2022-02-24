import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Productlistpage from "../../components/Homepage/productList";
import { fetchProducts, fetchProductsByOutlet, selectProductLists } from '../../store/productSlice';
import Outlets from '../Outlets/outlet';
import { selectoutletLists } from '../../store/outletSlice';



function ProductList() {

    const dispatch = useAppDispatch();

    const {productList} = useAppSelector(selectProductLists);
    const outletList = useAppSelector(selectoutletLists);
    

    useEffect(() => {
       
        dispatch(fetchProductsByOutlet(outletList.selectedOutlet));
    }, [dispatch,outletList.selectedOutlet]);

    if(!productList){
        return(
            <div>
                
                Loading ...
            </div>
        )
    }

    return (
        <div>
            
            <Outlets/>
            
            < Productlistpage {...productList} />

        </div>
    )
}

export default ProductList