import { Link } from "react-router-dom"

type productprops = {
    product: {
        product_code: number;
        product_name: string;
        price: number;
        quantity: number;
        last_updated: string;
        productDescription: string;
        productImage: string;
    };
}

function ProductListItem(props: productprops) {


    return (
       
        <div>
             {/* {console.log(props.product.product.images[0].imageUrl)} */}
            <div className="card  shadow-2xl  border rounded-box">
                <figure className="px-10 pt-10 ">
                    <img src={props.product.product.images[0].imageUrl} className="rounded-xl max-w-6xl  " />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg">{props.product.product.productName}</h2>
                    <div className="grid grid-cols-5 gap-4">
                       
                        <div className="col-start-1 col-end-3 ...">
                        <p className="text-lg"> Rs. {props.product.product.price}</p>
                        </div>
                        <div className="col-end-6 col-span-2 ...">
                        <p><div className="badge badge-accent">{props.product.availableQuantity }</div></p>
                        </div>
                       
                    </div>
                  
                    
                    <Link className="justify-center card-actions" to={`/view/${props.product.product_code}`}>
                        <button className="btn btn-outline btn-accent">More info</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default ProductListItem