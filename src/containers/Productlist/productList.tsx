import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Productlistpage from "../../components/Homepage/productList";


function ProductList() {

    const [productData, setProductData] = useState([]);

    // useEffect(() => {
    //     getProducts().then((res) =>
    //         setProductData(res.data)
    //     );
    // }, []);

    const Productlist = [
        {
            product_code: 1,
            product_name: "Rice Cooker",
            price: 1000,
            quantity: 10,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.jungle.lk/wp-content/uploads/2020/02/Abans-Electric-Rice-Cooker-with-Steamer-1.5L-%E2%80%93-AC15TR1.jpg",
            last_updated: "2022-1-8"
        },
        {
            product_code: 2,
            product_name: "Gas Cooker",
            price: 2000,
            quantity: 20,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.singersl.com/sites/default/files/styles/product_large/public/images/products/2021-11/NIK_NG845K1-01.jpg?itok=Zn1r5hI0",
            last_updated: "2022-1-18"
        },
        {
            product_code: 4,
            product_name: "Pressure Cooker",
            price: 3000,
            quantity: 30,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.singersl.com/sites/default/files/styles/product_large/public/images/products/2022-01/KEN_KN-PCM80-01.jpg?itok=UW4VgaBt",
            last_updated: "2022-1-28"
        },
        {
            product_code: 5,
            product_name: "Oven and Grill",
            price: 3000,
            quantity: 30,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.singersl.com/sites/default/files/styles/product_large/public/images/products/2022-01/TEF_TFFW501827-01.jpg?itok=4vOnxaOd",
            last_updated: "2022-1-28"
        },
        {
            product_code: 6,
            product_name: "Induction Cooker",
            price: 3000,
            quantity: 30,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.singersl.com/sites/default/files/styles/product_large/public/images/products/2022-01/PRE-INDUCOO-01.jpg?itok=bWu5NLhf",
            last_updated: "2022-1-28"
        },
        {
            product_code: 6,
            product_name: "Air Fryer",
            price: 3000,
            quantity: 30,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.singersl.com/sites/default/files/styles/product_large/public/images/products/2021-11/NIK_NAF779A-01.jpg?itok=f2sQft5j",
            last_updated: "2022-1-28"
        }
    ]

    return (
        <div>
            
            < Productlistpage products={Productlist} />

        </div>
    )
}

export default ProductList