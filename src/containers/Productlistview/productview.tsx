import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { string } from "yup/lib/locale";
import ProductViewPage from "../../components/Homepage/productView"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectoutletLists } from "../../store/outletSlice";
import { fetchSingleProduct, selectProduct } from "../../store/productViewSlice";


function ProductView() {
    const  {id} = useParams();
   
    const dispatch = useAppDispatch();

    const {product} = useAppSelector(selectProduct);
    const outletList = useAppSelector(selectoutletLists);
   
   

    
    useEffect(() => {
        dispatch(fetchSingleProduct(outletList.selectedOutlet,id));
      }, [dispatch]);
      
      
      if(!product){
        return(
            <div>
                Loading ...
            </div>
        )
    }
    return (

      <div >
        
        <ProductViewPage {...product} /> 
        
      </div>
    )
  }
  
  export default ProductView