import { useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import TransactionsPage from "../../components/Transactions/transactionpage"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectCartList } from "../../store/cartSlice";
function Cart() {
    
  const dispatch = useAppDispatch();

  const transactionList = useAppSelector(selectCartList);

//   useEffect(() => {
//       dispatch(fetchTransactions());
//   }, [dispatch]);
//   console.log(transactionList);
    return (
      <div >
          
          <p>{transactionList.length}</p>
      </div>
    )
  }
  
  export default Cart
