
type productprops = {
    products: {
        quantity:number;
        product:{
            id:string
            price:string,
            quantity: number;
            productName: string;
            imageUrl:string;
        }
    }[];
}

function TransactionsView(props:productprops) {


    return (
        <div >

            {/* <div className="grid grid-cols-6 gap-4 pt-6 ">

                <div className="col-start-3 col-span-2   content-start ... ">

                   
                    <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col bg-white shadow-xl rounded-md">
                            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                <div className="flex items-start justify-between">

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">

                                                <li key={props.transaction.order_Id} className="py-6 flex">
                                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                        <img
                                                            src={props.transaction.productImage}

                                                            className="w-full h-full object-center object-cover"
                                                        />
                                                    </div>

                                                    <div className="ml-4 flex-1 flex flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <a >{props.transaction.product_name}</a>
                                                                </h3>
                                                                <p className="ml-4">Rs. {props.transaction.price}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500">color</p>
                                                        </div>
                                                        <div className="flex-1 flex items-end justify-between text-sm">
                                                            <p className="text-gray-500">Qty {props.transaction.quantity}</p>

                                                            <div className="flex">
                                                            <p className="ml-4 text-black"> {props.transaction.created_at}</p>
                                                           
                                                               
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div> */}
            asdas
        </div>
    )
}

export default TransactionsView