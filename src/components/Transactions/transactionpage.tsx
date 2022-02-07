import TransactionsItem from "./transactionitem"

type transactionprops = {
  transactions: {
    order_Id: number;
    product_name: string;
    price: number;
    quantity: number;
    productImage: string;
    created_at: string;
  }[] ;

}

function TransactionsPage(props:transactionprops) {


  return (

    <div >
      <div className="container mx-auto  ">
        <div className="grid grid-cols-6 gap-4 pt-6 ">

        {props.transactions.map((transaction,index) =>
                                {
                                    return(
                                            <TransactionsItem transaction = {transaction} key={index} />   
                                    )
                                })}
        
        </div>
      </div>
    </div>
  )
}

export default TransactionsPage
