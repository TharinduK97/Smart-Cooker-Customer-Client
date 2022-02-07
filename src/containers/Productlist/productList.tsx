import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Productlistpage from "../../components/Homepage/productList";
import { fetchProducts, selectProductLists } from '../../store/productSlice';

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

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);





    return (
        <div>
            {/* {console.log(productList)} */}

            <div className="container mx-auto  ">
                <div className="grid grid-cols-6 gap-4 pt-6 ">

                    <div className="col-start-3 col-span-2 ...  ">

                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled={true} selected={true}>Choose the Outlet</option>
                            <option>Ampara</option>
                            <option>Anuradhapura</option>
                            <option>Badulla</option>
                        </select>

                    </div>
                </div>
            </div>
            < Productlistpage products={productList.productList} />

        </div>
    )
}

export default ProductList