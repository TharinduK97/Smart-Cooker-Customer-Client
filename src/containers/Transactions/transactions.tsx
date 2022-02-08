import { useEffect } from "react";
import TransactionsPage from "../../components/Transactions/transactionpage"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchTransactions, selectTransactionLists } from "../../store/transactionSlice";
function Transactions() {
    
  const dispatch = useAppDispatch();

  const transactionList = useAppSelector(selectTransactionLists);

  useEffect(() => {
      dispatch(fetchTransactions());
  }, [dispatch]);

    return (
      <div >
          <TransactionsPage  transactions={transactionList.transactionList} />
      </div>
    )
  }
  
  export default Transactions