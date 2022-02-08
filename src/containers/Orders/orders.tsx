import OrdersPage from "../../components/Orders/orderspage"
import { useAppSelector } from "../../hooks";
import { selectoutletLists } from "../../store/outletSlice";
function Orders() {
    
  const outletList = useAppSelector(selectoutletLists);
  console.log("xxx"+outletList.selectedOutlet);
    return (
      <div >
        <OrdersPage/> 
      </div>
    )
  }
  
  export default Orders