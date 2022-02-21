import TransactionsItem from "./transactionitem"
import { Fragment, useState } from 'react'

type transactionprops = {
  transactions: {
    id: number;
    orderStatus: string;
    totalPrice: number;
    outlet: {
      city: string;
      doorNumber: number;
      id: string;
      street: string;
    };
    createdAt: string;
  }[];

}

function TransactionsPage(props: transactionprops) {


  return (

    <div >
      <div className="container mx-auto  ">

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        OrderStatus
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Outlet
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Created At
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total Price
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {props.transactions.map((transaction, index) => {
                      return (
                        <TransactionsItem transaction={transaction} key={index} num={index+1}/>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}

export default TransactionsPage
