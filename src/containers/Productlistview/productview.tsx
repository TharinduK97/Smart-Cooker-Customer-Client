import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { string } from "yup/lib/locale";
import ProductViewPage from "../../components/Homepage/productView"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchSingleProduct, selectProduct } from "../../store/productViewSlice";


function ProductView() {

    const dispatch = useAppDispatch();

    const productList = useAppSelector(selectProduct);
    
    let  {id} = useParams();

    
    useEffect(() => {
        dispatch(fetchSingleProduct(2));
      }, [dispatch]);
      
      console.log({id})

  const product = 
        {
            product_code: 1,
            product_name: "Rice Cooker",
            price: 1000,
            quantity: 10,
            productDescription:"Cras malesuada pretium orci, non ultricies orci fringilla eu. Praesent congue volutpat facilisis. Quisque sed vehicula libero. Curabitur fermentum pharetra tellus viverra iaculis. Ut convallis magna nisl, ut convallis massa convallis quis. Suspendisse vestibulum, risus nec congue gravida, enim lectus pellentesque lorem, non tempor dui diam non ex.",
            productImage:"https://www.jungle.lk/wp-content/uploads/2020/02/Abans-Electric-Rice-Cooker-with-Steamer-1.5L-%E2%80%93-AC15TR1.jpg",
            last_updated: "2022-1-8"
        }
  
    return (
      <div >
         
          
        <ProductViewPage product={product} /> 
        
      </div>
    )
  }
  
  export default ProductView