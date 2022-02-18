import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { string } from "yup/lib/locale";
import ProductViewPage from "../../components/Homepage/productView"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchSingleProduct, selectProduct } from "../../store/productViewSlice";


function ProductView() {
    const  {id} = useParams();
   
    const dispatch = useAppDispatch();

    const product = useAppSelector(selectProduct);
    
   

    
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
      }, [dispatch]);
      
      

    return (
      <div >
         
        <ProductViewPage product={product.product} /> 
        
      </div>
    )
  }
  
  export default ProductView