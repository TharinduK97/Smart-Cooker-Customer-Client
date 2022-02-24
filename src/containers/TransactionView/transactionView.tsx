import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchTransactionView, selectTransactionLists } from "../../store/transactionSlice";
import { useState, useEffect } from 'react';
import TransactionsView from "../../components/TrabsactionView/transactionview";
import { useParams } from "react-router-dom";

function Transactions() {
  const  {id} = useParams();
    const dispatch = useAppDispatch();
    const {Products} = useAppSelector(selectTransactionLists);
  
    
    useEffect(() => {
        dispatch(fetchTransactionView(id));
    }, [dispatch]);

    if(!Products){
      return(
          <div>
              Loading ...
          </div>
      )
  }
 
      return (
        <div >
           
            <TransactionsView  data={Products} />
        </div>
      )
    }
    
    export default Transactions