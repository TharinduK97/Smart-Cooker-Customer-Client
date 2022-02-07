
type transactionprops = {
    transaction: {
        order_Id: number;
        product_name: string;
        price: number;
        quantity: number;
        productImage: string;
        created_at: string;
    
    };
}

function TransactionsItem(props: transactionprops) {


    return (
        <div >
            <div className="container mx-auto  ">
                <div className="grid grid-cols-6 gap-4 pt-6 ">

                    <div className="col-start-3 col-span-2 border box  content-start ... ">
                        <div>
                            <h2 className="pl-2 pb-6 text-lg font-bold "> {props.transaction.product_name}</h2>

                            <div className="avatar pl-2 ">

                                <div className="mb-8 rounded-btn w-24 h-24">
                                    <img src="https://www.jungle.lk/wp-content/uploads/2020/02/Abans-Electric-Rice-Cooker-with-Steamer-1.5L-%E2%80%93-AC15TR1.jpg" />
                                </div>

                                <div className="pl-2">
                                    <p>Qty - 1</p>
                                    <p>Placed on 2022-1-18  </p>
                                    <p> <div className="badge">Completed</div>  </p>

                                </div>

                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TransactionsItem
