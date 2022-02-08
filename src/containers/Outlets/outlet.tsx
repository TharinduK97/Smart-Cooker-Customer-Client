import { useEffect } from "react";
import TransactionsPage from "../../components/Transactions/transactionpage"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IOutlet } from "../../store/interface";
import { fetchoutlets, selectOutlet, selectoutletLists } from "../../store/outletSlice";

function Outlets() {
    
  const dispatch = useAppDispatch();

  const outletList = useAppSelector(selectoutletLists);

  useEffect(() => {
      dispatch(fetchoutlets());
  }, [dispatch]);

  const onChange = (e:any) =>{
    // console.log(e.target.value)
    dispatch( selectOutlet(e.target.value));
    
  }
 
    return (
      <div >
         <div className="container mx-auto  ">
                <div className="grid grid-cols-6 gap-4 pt-6 ">

                    <div className="col-start-3 col-span-2 ...  ">

                        <select className="select select-bordered w-full max-w-xs"  onChange={onChange} value={outletList.selectedOutlet}>
                            <option disabled={true} selected={true} value="0">Choose the Outlet</option>
                            
                  {outletList.outletList?.map((outlet, index) => {
                    return(
                        <option key={index} value={outlet.outlet_id}>
                        {outlet.city}
                      </option>
                    )
                      
                  })}
                        </select>

                    </div>
                </div>
            </div>
      </div>
    )
  }
  
  export default Outlets