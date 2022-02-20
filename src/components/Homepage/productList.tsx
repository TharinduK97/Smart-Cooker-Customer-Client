import ProductListItem from './productListItem'

type productprops = {
    products: {
        availableQuantity:number;
        product:{
            id:string
            price:string,
            quantity: number;
            productName: string;
            imageUrl:string;
        }
    }[];
   
}

function Productlist(props:productprops) {
    return (
        <div>
           
            <div className="grid grid-cols-5 gap-6  pt-4">
            
                            {props.products.map((products,index) =>
                                {
                                    return(
                                            <ProductListItem product={products} key={index} />   
                                    )
                                })}

            </div>

        </div>
    )
}

export default Productlist