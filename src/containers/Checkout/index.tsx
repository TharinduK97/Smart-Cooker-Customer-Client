import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser } from '../../services/localStorage';
import { selectoutletLists } from '../../store/outletSlice';
import { selectProduct } from '../../store/productViewSlice';
import { postTransaction } from '../../store/transactionSlice';

interface IFormInputs {
    quantity: number
}

const schema = yup.object({
    quantity: yup.number().positive().integer().required().max(10)

}).required();


function Checkout() {


    let  today 		= new Date();
	let  dd 		= String(today.getDate()).padStart(2, '0');
	let  mm 		= String(today.getMonth() + 1).padStart(2, '0'); 
	let  yyyy 		= today.getFullYear();
    let date =` ${yyyy}-${mm}-${dd}`;

   

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    const dispatch = useAppDispatch();
    const outletList = useAppSelector(selectoutletLists);
    const product = useAppSelector(selectProduct);
    const navigate = useNavigate();
    const onSubmit = (data: IFormInputs) => {

        let order = {
            "user_code": getUser(),
            "created_At": date,
            "quantity": data.quantity,
            "order_status": "pending",
            "product_Code": product.product?.product_code,
            "outlet_code": outletList.selectedOutlet
        }
        console.log(order)
        
        dispatch(postTransaction(order)).then((res)=>{
                alert("success");
                navigate("/");
        })
        
    };


    return (
        <div >
            <div>
                <form className="form-detail" onSubmit={handleSubmit(onSubmit)} >

                    <div className="container mx-auto  ">
                        <div className="grid grid-cols-6 gap-4 pt-6 ">

                            <div className="col-start-3 col-span-2 ...  ">
                                <div className="form-control pb-2">
                                    <label className="label">
                                        <span className="label-text text-lg">Enter the quantity</span>
                                    </label>
                                    <input type="number" placeholder="quantity" className="input input-bordered" {...register("quantity")} />
                                </div>

                                <label ><p className="text-red-500 pl-1 text-sm">{errors.quantity?.message}</p></label>


                            </div>


                            <div className="col-start-3 col-span-2 ... ">

                                <button className="btn btn-outline " type="submit">Place Order</button>

                            </div>
                            <br />

                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Checkout