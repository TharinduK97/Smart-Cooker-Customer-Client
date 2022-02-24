import { useEffect } from "react";
import TransactionsPage from "../../components/Transactions/transactionpage"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IOutlet } from "../../store/interface";
import { fetchoutlets, selectOutlet, selectoutletLists } from "../../store/outletSlice";

function Outlets() {
    
  const dispatch = useAppDispatch();

  const {outletList} = useAppSelector(selectoutletLists);
  const {selectedOutlet} = useAppSelector(selectoutletLists);

  useEffect(() => {
      dispatch(fetchoutlets());
  }, [dispatch]);

  const onChange = (e:any) =>{
   
    dispatch( selectOutlet(e.target.value));
    
  }
 
    return (
      <div >
         <div className="container mx-auto  ">
                <div className="grid grid-cols-6 gap-4 pt-6 ">

                    <div className="col-start-3 col-span-2 ...  ">

                        <select className="select select-bordered w-full max-w-xs"  onChange={onChange} value={selectedOutlet}>
                            <option disabled={true}  value="0">Choose the Outlet</option>
                            
                  {outletList?.map((outlet, index) => {
                    return(
                        <option key={index} value={outlet.id}>
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