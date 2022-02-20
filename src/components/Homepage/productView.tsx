import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { isAuthenticated } from "../../services/authenticationService";
import { addToCart } from "../../store/cartSlice";
import { IProduct } from "../../store/interface";
import { productListReducer } from "../../store/productSlice";
import CheckOut from "../../containers/Checkout/index"



type productprops = {
    
    product:{
        id:string
        price:string,
        quantity: number;
        description: string;
        productName: string;
        imageUrl:string;
    }
    
}


function ProductView(props: productprops) {

    const dispatch = useAppDispatch();

   
    return (
        <div>

            <div className="container mx-auto pt-6 ">

                <div className="grid grid-cols-7 gap-4">

                    <div className="col-start-3 col-span-3 ...">

                        <div className="card card-bordered">
                            <figure>
                                <img src={props.product.imageUrl} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <div className="badge mx-2 badge-secondary">{props.product.productName}</div>
                                </h2>
                                {isAuthenticated() &&
                                      
                                         <CheckOut/>
                                    }
                               
                                <div className="grid grid-cols-5 gap-4 pb-2">
                                    
                                   
                                    <div className="col-start-1 col-end-3 ...">
                                        <p className="text-lg"> Rs. {props.product.price}</p>
                                    </div>
                                    <div className="col-end-6 col-span-2 ...">
                                        <p><div className="badge badge-accent">{props.product.quantity }</div></p>
                                    </div>

                                </div>
                                <p>{props.product.description}</p>



                                <div className="justify-end card-actions">


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductView