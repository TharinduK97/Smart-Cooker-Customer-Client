import { IOrderproducts } from "../../store/interface"
import TransactionsViewItem from "./transactionViewItem"



function TransactionsView({data}:{data:IOrderproducts[]}) {


    return (
        <div >

            <div className="grid grid-cols-6 gap-4 pt-6 ">

                <div className="col-start-3 col-span-2   content-start ... ">

                   
                    <div className="w-screen max-w-md">
                        <div className="h-full flex flex-col bg-white shadow-xl rounded-md">
                            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                                <div className="flex items-start justify-between">

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">

                                               {data?.map((product,index)=>{
                                                   return(
                                                   <TransactionsViewItem {...product} key={index}/>
                                                   )
                                               })
                                                
                                               }

                                            </ul>
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

export default TransactionsView