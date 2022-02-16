import ProductListItem from './productListItem'

type productprops = {
    products: {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription:string;
        productImage:string;
    }[] ;

}


function Productlist(props:productprops) {
    return (
        <div>
            {console.log(props.products)}
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