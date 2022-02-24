import { IOutletProduct, IOutletProducts } from '../../store/interface'
import ProductListItem from './productListItem'


function Productlist(props:IOutletProducts) {




    return (
        <div>
           
            <div className="grid grid-cols-5 gap-6  pt-4">
            
                            {props.outletProducts.map((product,index) =>
                                {
                                    return(
                                            <ProductListItem  {...product} key={index}  />   
                                    )
                                })}

            </div>

        </div>
    )
}

export default Productlist