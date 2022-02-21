import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { isAuthenticated } from "../../services/authenticationService";
import { addToCart } from "../../store/cartSlice";
import { IProduct } from "../../store/interface";
import { productListReducer } from "../../store/productSlice";
import CheckOut from "../../containers/Checkout/index"
import * as yup from "yup";
import { postTransaction } from "../../store/transactionSlice";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectoutletLists } from "../../store/outletSlice";
import { selectProduct } from "../../store/productViewSlice";


type productprops = {

    product: {
        id: string
        price: string,
        quantity: number;
        description: string;
        productName: string;
        imageUrl: string;
    }

}
interface IFormInputs {
    quantity: number
}

const schema = yup.object({
    quantity: yup.number().positive().integer().required().max(10)

}).required();

function ProductView(props: productprops) {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const dispatch = useAppDispatch();
    const outletList = useAppSelector(selectoutletLists);
    const product = useAppSelector(selectProduct);
    const navigate = useNavigate();
    const onSubmit = (data: IFormInputs) => {

        let order = {

            "totalPrice": product.product?.price * data.quantity,
            "outletId": outletList.selectedOutlet,
            "productlist": [
                {
                    "productId": product.product?.id,
                    "quantity": data.quantity
                }
            ]
        }

        if (data.quantity <= props.product.quantity) {
            dispatch(postTransaction(order)).then((res) => {
                console.log(res)
                alert("success");
                navigate("/");
            })
        } else {
            alert("Invalid Quantity")
        }

    };



    return (
        <div>

            <div className="container mx-auto pt-6 ">




                <div className="col-start-3 col-span-3 ...">
                    <div className="bg-white">
                        <div className="pt-6">



                            <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                                <figure>
                                    <img src={props.product.imageUrl} />
                                </figure>
                            </div>


                            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{props.product.productName}</h1>
                                </div>


                                <div className="mt-4 lg:mt-0 lg:row-span-3">
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl text-gray-900">Rs. {props.product.price}</p>

                                    <div>
                                            <h3 className="text-sm text-gray-900 font-medium">Available Quantity - <div className="badge badge-accent">{props.product.quantity}</div></h3>

                                        </div>

                                    {isAuthenticated() && <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>

                                        
                                        <div className="form-control pb-2">
                                            <label className="label">
                                                <span className="label-text text-lg">Enter the quantity</span>
                                            </label>
                                            <input type="number" placeholder="quantity" className="input input-bordered" {...register("quantity")} />
                                        </div>

                                        <label ><p className="text-red-500 pl-1 text-sm">{errors.quantity?.message}</p></label>

                                        <button
                                            type="submit"
                                            className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Buy Now
                                        </button>
                                    </form>}


                                </div>

                                <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

                                    <div>
                                        <h3 className="sr-only">Description</h3>

                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">{props.product.description}</p>
                                        </div>
                                    </div>




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