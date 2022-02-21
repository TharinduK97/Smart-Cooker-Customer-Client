import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchTransactionView, selectTransactionLists } from "../../store/transactionSlice";
import { useState, useEffect } from 'react';
import TransactionsView from "../../components/TrabsactionView/transactionview";
import { useParams } from "react-router-dom";
function Transactions() {
    
    const dispatch = useAppDispatch();
    const  {id} = useParams();
  
    const transactionList = useAppSelector(selectTransactionLists);
  
    useEffect(() => {
        dispatch(fetchTransactionView(id));
    }, [dispatch]);
  
      return (
        <div >
            {console.log(transactionList.Products)}
            <TransactionsView  products={transactionList.Products} />
        </div>
      )
    }
    
    export default Transactions