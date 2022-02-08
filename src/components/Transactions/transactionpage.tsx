import TransactionsItem from "./transactionitem"
import { Fragment, useState } from 'react'

type transactionprops = {
  transactions: {
    order_Id: number;
    product_name: string;
    price: number;
    quantity: number;
    productImage: string;
    created_at: string;
  }[];

}

function TransactionsPage(props: transactionprops) {


  return (

    <div >
      <div className="container mx-auto  ">

        {props.transactions.map((transaction, index) => {
          return (
            <TransactionsItem transaction={transaction} key={index} />
          )
        })}
      </div>
    </div>

  )
}

export default TransactionsPage
