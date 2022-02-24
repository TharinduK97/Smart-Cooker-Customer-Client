import { IOrderproducts } from "../../store/interface"

function TransactionsViewItem(props:IOrderproducts) {


    return (


        <li className="py-6 flex">
            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                    src={props.product.imageUrl}

                    className="w-full h-full object-center object-cover"
                />
            </div>

            <div className="ml-4 flex-1 flex flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a >{props.product.productName}</a>
                        </h3>
                        <p className="ml-4">Qty - {props.quantity}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500"></p>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                    <p className="text-gray-500"></p>

                    <div className="flex">

                        <p className="ml-4 text-black"> </p>

                    </div>
                </div>
            </div>
        </li>



    )
}

export default TransactionsViewItem