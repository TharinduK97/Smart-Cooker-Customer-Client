type productprops = {
    Orderproducts: {
        quantity:number;
        product:{
            id:string
            price:number,
            quantity: number;
            productName: string;
            imageUrl:string;
        }
    };
}

function TransactionsViewItem(props:productprops) {


    return (


        <li className="py-6 flex">
            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                    src={props.Orderproducts.product.imageUrl}

                    className="w-full h-full object-center object-cover"
                />
            </div>

            <div className="ml-4 flex-1 flex flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a >{props.Orderproducts.product.productName}</a>
                        </h3>
                        <p className="ml-4">Rs. {props.Orderproducts.product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {props.Orderproducts.quantity}</p>

                    <div className="flex">
                        <p className="ml-4 text-black"> props.transaction.created_at</p>


                    </div>
                </div>
            </div>
        </li>



    )
}

export default TransactionsViewItem